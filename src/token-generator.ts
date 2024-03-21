import * as jose from 'jose'

const secret = new TextEncoder().encode(process.env.SECRET_KEY)
const alg = 'HS256'

export async function generateToken(user: string, password: string) {

    return new jose.SignJWT({ user, password })
        .setProtectedHeader({ alg, typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(secret)
};