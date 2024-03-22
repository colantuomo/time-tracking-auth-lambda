import { config as dotEnvConfig } from 'dotenv';
import { ScanCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { unmarshall } from '@aws-sdk/util-dynamodb';

dotEnvConfig();

const client = new DynamoDBClient({
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID as string,
        secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
    },
    region: 'sa-east-1',
});

export async function scanByUsernameAndPassword(user: string, password: string) {
    const docClient = DynamoDBDocumentClient.from(client);
    const command = new ScanCommand({
        TableName: "users",
        FilterExpression: 'username = :username',
        ExpressionAttributeValues: {
            ':username': { S: user },
            ':pass': { S: password },
        },
        ConsistentRead: true,
    });

    const { Items } = await docClient.send(command);
    return Items?.map(item => unmarshall(item));
}