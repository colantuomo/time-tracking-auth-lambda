import { scanByUsernameAndPassword } from './config/aws/dynamoDB';

export async function isAValidUser(username: string, password: string) {
    const user = await scanByUsernameAndPassword(username, password);
    return user && user.length > 0;
}