import { Handler } from "aws-lambda";
export const handler: Handler = async (event, context) => {
    const requestBody = JSON.parse(event.body);
    const { login, register } = event.pathParameters;
    const { matricula, password } = requestBody;
    if (login) {
        return {
            statusCode: 200,
            body: JSON.stringify(`register route ${matricula}`)
        };
    }
    if (register) {
        return {
            statusCode: 200,
            body: JSON.stringify(`register route ${matricula}`)
        };
    }
    return {
        statusCode: 404,
        body: JSON.stringify(`route not found`)
    };
};