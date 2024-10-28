import { atom } from 'recoil';

type ChatsType = {
    sender: string,
    content : string,
    time: string
}

export const globalChats = atom<Array<ChatsType>>({
    key: 'chats',
    default: []
})