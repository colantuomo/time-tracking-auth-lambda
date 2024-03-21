import * as jose from 'jose'

export function generateToken(user: string, password: string) {
    const secret = new TextEncoder().encode(process.env.SECRET_KEY)
    const alg = 'HS256'

    return new jose.SignJWT({ user, password })
        .setProtectedHeader({ alg, typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(secret)
};