export function formatResponse<T>(statusCode: number, body: T) {
    return {
        isBase64Encoded: false,
        headers: {
            "Content-Type": "application/json",
        },
        statusCode,
        body: JSON.stringify(body)
    };
}