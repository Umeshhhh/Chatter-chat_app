'use client';
import ChatSection from "./ChatSection";
import MssgSend from "./MssgSend";
import ChatHeader from "./ChatHeader";
import { useRecoilValue } from "recoil";
import { chatBoxVisible } from "@/app/store/atom/chatbox";
import { useSession } from "next-auth/react";

export default function Chats() {

    const VisibleChatBox = useRecoilValue(chatBoxVisible);
    const session = useSession();

    return (
        <div className={`h-screen w-full bg-gray-200 ${VisibleChatBox? 'flex' : 'hidden'} flex-col `}>
            {/* Header section */}
            <ChatHeader />

            {/* Chat section with scroll */}
            <ChatSection />

            {/* Input section */}
            <section>
                <hr className="h-px bg-gray-300 border-0"></hr>
                <MssgSend userId={session.data?.user.id} />
            </section>
        </div>
    )
}
