export function formatResponse<T>(statusCode: number, body: T) {
    return {
        headers: {
            "Content-Type": "application/json",
        },
        statusCode,
        body
    };
}