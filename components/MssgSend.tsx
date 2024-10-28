'use client';
import findUser from "@/app/actions/findUser";
import { globalChats } from "@/app/store/atom/chats";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function MssgSend({ userId }: { userId: string }) {

    const [message, setMessage] = useState('');
    const [chatss, setChats] = useRecoilState(globalChats);
    const [socket, setSocket] = useState<null | WebSocket>(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');
        ws.onopen = () => {
            console.log('connected');
            setSocket(ws);
        };
        ws.onmessage = async (message) => {
            const data = JSON.parse(message.data);
            const user = await findUser({ userId: data.sender });
            const mssg = {
                sender: user?.username || '',
                content: data.content,
                time: data.time
            };
            setChats((prevChats) => [...prevChats, mssg]);
        };
        ws.onclose = () => {
            console.log('closed');
        };

        return () => {
            ws.close();
        };
    }, [setChats]);

    if (!socket) {
        return (
            <div className="p-4 bg-white flex items-center place-content-center font-mukta font-semibold">
                Connecting to server...
            </div>
        );
    }

    const handleMssgSend = () => {
        if (message.length > 0 && socket) {
            const date = new Date();
            const time = date.toLocaleTimeString();
            const sendData = {
                sender: userId,
                content: message,
                time: time.slice(0, 5)
            };
            setMessage('');
            socket.send(JSON.stringify(sendData));
        }
    };

    return (
        <section className="w-full flex items-center gap-2">
            <form
                id="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleMssgSend();
                }}
                className="w-full flex items-center py-3 px-5 gap-2"
            >
                <div className="w-full rounded-md">
                    <input
                        id="input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-3 rounded-md w-full outline-none ring-1 ring-gray-300 focus:ring-gray-400"
                        type="text"
                        placeholder="Type a message..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-black h-10 w-10 rounded-md flex items-center place-content-center ring-0 focus:ring-2 focus:ring-white"
                >
                    <FontAwesomeIcon className="h-7 w-7" color="white" size="1x" icon={faPlay} />
                </button>
            </form>
        </section>
    );
}
