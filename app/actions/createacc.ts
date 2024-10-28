'use server';
import prisma from "@/db/db";
import bcrypt from 'bcrypt';

type inputType = {
    firstName: string,
    lastName: string,
    username: string,
    password: string
}

export async function createacc({ firstName, lastName, username, password }:inputType){

    try{
        const hashPass = await bcrypt.hash(password,10);
        await prisma.user.create({
            data:{
                firstName,
                lastName,
                username,
                password: hashPass
            }
        })
        return true;
    }catch(e: any) {
        console.error("Error creating account:", e);
        return false;
    }

}

