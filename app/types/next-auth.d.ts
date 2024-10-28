import 'next-auth';

declare module 'next-auth' {
    interface User{
        id: string,
        username: string,
        firstName: string,
        lastName: string
    }
    interface Session{
        user: {
            id: string,
            username: string,
            firstName: string,
            lastName: string 
        } & DefaultSession['user']
    }
}