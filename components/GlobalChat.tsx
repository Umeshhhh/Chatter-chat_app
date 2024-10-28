'use client';
import { chatbox, chatBoxVisible } from "@/app/store/atom/chatbox";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function GlobalChat(){

    const setChatBox = useSetRecoilState(chatbox);
    const setVisibleChatBox = useSetRecoilState(chatBoxVisible);

    return(
        <div 
            onClick={() => {
                setChatBox({name: '#GLOBAL CHAT', id: '#global'});
                setVisibleChatBox(true);
            }} 
            className="py-3 px-3 md:px-1 lg:px-5 transition-all flex justify-between items-center hover:bg-gray-100 cursor-pointer rounded-xl font-mukta">
            <div className="flex items-center gap-3">
                <section className="h-9 w-9 bg-black rounded-full flex place-content-center items-center text-white font-semibold overflow-hidden ring-1 ring-gray-700 shadow-md shadow-gray-300">
                    <FontAwesomeIcon className="h-6 w-6" icon={faGlobe} />
                </section>
                <section className="-space-y-1 overflow-hidden">
                    <h1 className="font-bold">#Global Chat</h1>
                    <p className="text-gray-500 text-sm hidden lg:block md:block"></p>
                </section>
            </div>
            <section>
                <p className="text-gray-400 hidden md:block lg:block text-sm lg:text-md md:text-md font-mukta">2m ago</p>
            </section>
        </div>
    )
}