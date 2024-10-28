// import prisma from "@/app/db/db";
import { PrismaClient } from '@prisma/client'
import { NextResponse } from "next/server";

type inputType = {
    firstName: string,
    lastName: string,
    username: string,
    password: string
}

const client = new PrismaClient();

export async function POST(req: Request, res: NextResponse){

    try{
        const { firstName, lastName, username, password } : inputType = await req.json();
        const resp = await client.user.create({
            data: {
                firstName,
                lastName,
                username,
                password
            }
        })

        return NextResponse.json({mssg: 'User created successfully',resp});
    }catch(e){
        return NextResponse.json({mssg: 'Error' + e});
    }


}