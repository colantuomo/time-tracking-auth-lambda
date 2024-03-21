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

    if (!await isAValidUser(user)) {
        return formatResponse(404, { message: 'User does not exist. Please register first.' });
    }

    return formatResponse(200, {
        token: await generateToken(user, password)
    })
};