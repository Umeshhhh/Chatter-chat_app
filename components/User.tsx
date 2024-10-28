'use client';
import { chatbox, chatBoxVisible } from "@/app/store/atom/chatbox";
import { chats } from "@/app/store/atom/chats";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function User({name, mssg, time,id}:{name: string, mssg: string, time: string,id: string}){

    const setChatBox = useSetRecoilState(chatbox);
    const setVisibleChatBox = useSetRecoilState(chatBoxVisible);
    const [chatss ,setChats] = useRecoilState(chats);

    return(
        <div onClick={() => {
                setChatBox({name: name, id: id});
                setVisibleChatBox(true);
                setChats([...chatss, {user: id, chats: []}]);
            }} 
            className="py-3 px-3 md:px-1 lg:px-5 transition-all flex justify-between items-center hover:bg-gray-100 cursor-pointer rounded-xl font-mukta"
            >
            <div className="flex items-center gap-3">
                <section className="h-9 w-9 bg-gray-700 rounded-full flex place-content-center items-end text-white font-semibold overflow-hidden ring-1 ring-gray-700 shadow-md shadow-gray-300">
                    <FontAwesomeIcon className="h-7 w-7" icon={faUser} />
                </section>
                <section className="-space-y-1 overflow-hidden">
                    <h1 className="font-semibold">{name}</h1>
                    <p className="text-gray-500 text-sm hidden lg:block md:block">{mssg}</p>
                </section>
            </div>
            <section>
                <p className="text-gray-400 hidden md:block lg:block text-sm lg:text-md md:text-md font-mukta">{time}</p>
            </section>
        </div>
    )
}