'use client';
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil"
import { authOptions } from "./api/auth/[...nextauth]/options";

export default function Provider({children}:{children: React.ReactNode}){

    return(
        <div>
            <RecoilRoot>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </RecoilRoot>
        </div>
    )
}