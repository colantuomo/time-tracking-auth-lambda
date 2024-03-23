export function formatResponse<T>(statusCode: number, body: T) {
    return JSON.stringify({
        isBase64Encoded: false,
        headers: {
            "Content-Type": "application/json",
        },
        statusCode,
        body
    });
}