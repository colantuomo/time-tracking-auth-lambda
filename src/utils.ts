export function formatResponse<T>(statusCode: number, body: T) {
    return {
        statusCode,
        body
    };
}