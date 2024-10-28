'use client';

import { useRouter } from "next/navigation";

export default function SignInUp({ para, text, route }:{para: string, text: string, route: string}){

    const router = useRouter();

    return(
        <p className="font-mukta text-gray-500 text-md flex gap-1">{para}?<span onClick={() => router.push(`${route}`)} className="hover:underline cursor-pointer">{text}</span></p>
    )
}