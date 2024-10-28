import { atom } from "recoil";


export const chatbox = atom({
    key: 'chatbox',
    default: {
        name: '',
        id: ''
    }
})

export const chatBoxVisible = atom({
    key: 'chatBoxVisible',
    default: false
})