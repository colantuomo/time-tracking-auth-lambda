import { scanByUsernameAndPassword } from './config/aws/dynamoDB';

export async function isAValidUser(username: string, password: string) {
    const user = await scanByUsernameAndPassword(username, password);
    if (!user || user.length === 0) {
        throw new Error('User does not exist. Please, register first.');
    }
}