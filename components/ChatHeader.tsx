'use client';
import { chatbox, chatBoxVisible } from "@/app/store/atom/chatbox";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function ChatHeader(){

    const userChatBox = useRecoilValue(chatbox);
    const setVisibleChatBox = useSetRecoilState(chatBoxVisible);
    let avatar = '';
    if(!(userChatBox.name == '')){
        avatar = userChatBox.name[0];
    }

    return(
        <section className="w-full py-2 flex justify-between bg-gray-100 px-5">
            <div className="flex items-center gap-5">
                <section className="h-10 w-10 rounded-full bg-black text-white flex place-content-center items-center font-semibold">
                    {avatar}
                </section>
                <section className="-space-y-1">
                    <p className="text-lg font-bold">{userChatBox.name}</p>
                    <p className="text-gray-500">Online</p>
                </section>
            </div>
            <section className="flex items-center px-1 rounded-full">
                <FontAwesomeIcon onClick={() => setVisibleChatBox(false)} className="p-3 rounded-full cursor-pointer hover:bg-gray-200" icon={faX} />
            </section>
        </section>
    )
}