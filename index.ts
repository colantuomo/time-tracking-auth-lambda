import { Handler } from "aws-lambda";
import { register, login } from './src'
export const handler: Handler = async (event, context) => {

    return `${register()} - ${login()}`;
};

// zip to deploy to lambda
// zip -j api dist/index.js package.json