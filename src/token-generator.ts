import jwt from "jsonwebtoken";

export function generateToken(user: string, password: string) {
    return jwt.sign({ user, password }, process.env.SECRET_KEY as string, { expiresIn: "24h" });
};