import { Handler } from "aws-lambda";
import { register, login } from './src'
export const handler: Handler = async (event, context) => {
    const requestBody = JSON.parse(event.body);
    // Extracting parameters from the parsed JSON
    const { matricula, password } = requestBody;

    return `${register()} - ${login()} [${matricula} - ${password}]`;
};