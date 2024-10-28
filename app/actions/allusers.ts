'use server';

import prisma from "@/db/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export async function allusers(){

    try{
        const session = await getServerSession(authOptions);
        const allUsers = await prisma.user.findMany({});
        const users = allUsers.filter((user) => {
            if(user.id != session?.user.id){
                return true;
            }else return false;
        })
        return users;
    }catch(e){
        console.error("Error creating account:", e);
        return null;
    }

} 