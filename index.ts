import { Handler } from "aws-lambda";
import { formatResponse } from './src/utils';
import { generateToken } from './src/token-generator';
import { isAValidUser } from './src/user-validator';

export const handler: Handler = async (event, context) => {
    const requestBody = JSON.parse(event.body);
    const { user, password } = requestBody;

    if (!user || !password) {
        return formatResponse(401, { message: 'User and password are required' });
    }

    try {
        await isAValidUser(user, password)
    } catch (error: any) {
        return formatResponse(500, {
            message: error?.message
        })
    }

    return formatResponse(200, {
        token: await generateToken(user),
    })
};