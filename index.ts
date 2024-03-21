import { Handler } from "aws-lambda";
import { register, login } from './src'
export const handler: Handler = async (event, context) => {
    return `${register()} - ${login()} [${event.body.toString()}]`;
};