'use client';

import MyMssg from "./MyMssg";
import UsersMssg from "./UsersMssg";
import { useRecoilState } from "recoil";
import { globalChats } from "@/app/store/atom/chats";
import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";

export default function ChatSection(){

    const [chatschat, setChatschat] = useRecoilState(globalChats);
    const session = useSession();

    const ref : any = useRef(null);

    const handleScrollToBottom = () => {
        ref.current.scrollIntoView({behaviour: 'smooth'});
    }

    useEffect(() => {
        handleScrollToBottom();
    },[chatschat]);

    return(
        <section className="flex-grow w-full flex flex-col justify-end overflow-y-auto no-scrollbar p-2">
            <div className="w-full flex flex-col gap-1 flex-grow overflow-y-auto no-scrollbar">
                {chatschat.map(({sender, content, time},i) => {
                    if(sender == session.data?.user.username){
                        return(
                            <MyMssg key={i} user={session.data.user.username} mssg={content} time={time} />
                        )
                    }else{
                        return(
                            <UsersMssg key={i} user={sender} mssg={content} time={time} />
                        )
                    }
                })}
                <div ref={ref}></div>
            </div>
        </section>
    )
}