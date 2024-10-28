'use server';

import prisma from "@/db/prisma/db";

export default async function findUser({userId}:{userId: string}){

    try{
        const findUser = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })
        if(!findUser){
            return null;
        }
        const user = {
            firstName: findUser.firstName,
            lastName: findUser.lastName,
            username: findUser.username
        }
        return user;
    }catch(e){
        console.log('error' + e);
        return null;
    }

}