import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt';
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from "@/db/db";

export const authOptions : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'Enter your username' },
                password: {  label: 'Password', type: 'password', placeholder: 'Enter your password' }
            },
            async authorize(credentials: any){
                try{
                    const user = await prisma.user.findUnique({
                        where: {
                            username: credentials?.username
                        }
                    });
                    if(!user){
                        throw new Error('No User Found');
                    }
                    const check = await bcrypt.compare(credentials?.password,user.password)
                    if(!check){
                        throw new Error('Incorrect Password');
                    }
                    return user;
                }catch(e){
                    throw new Error('Error: '+ e);
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || '$e#r!tubvu&rbvuk$fbvsfukv',
    callbacks: {
        async jwt({ token, user }){
            if(user){
                token.id = user.id;
                token.username = user.username;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
            }
            return token;
        },
        async session({ token, session }){
            if(token){
                session.user.id = token.id;
                session.user.username = token.username;
                session.user.firstName = token.firstName;
                session.user.lastName = token.lastName;
            }
            return session;
        }
    },
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/signin',
        error: '/signin'
    }
}

