'use client';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInForm(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <form onSubmit={(e) => e.preventDefault()} className="w-full mt-3 flex flex-col px-5 py-3 gap-3 font-mukta">
            <div className="flex flex-col gap-1 w-full">
                <label className="text-lg font-semibold text-gray-600">Username:</label>
                <input onChange={(e) => setUsername(e.target.value)} className="ring-1 ring-gray-400 outline-none p-2 rounded-lg focus:ring-blue-600 transition-all" type="text" placeholder="Enter your username" />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="text-lg font-semibold text-gray-600">Password:</label>
                <input onChange={(e) => setPassword(e.target.value)} className="ring-1 ring-gray-400 outline-none p-2 rounded-lg focus:ring-blue-600 transition-all" type="password" placeholder="Enter your password" />
            </div>
            <button 
                onClick={() => {
                    try{
                        signIn('credentials', {
                            username,
                            password,
                            redirect: true,
                            callbackUrl: window.location.origin + '/chats'
                        }).then(() => {
                        }).catch((e) => {
                            console.log(e);
                        })
                    }catch(e){
                        alert('Error: ' + e);
                    }
                }}
                className="p-2 mt-2 bg-blue-500 text-white font-semibold rounded-3xl text-xl hover:rounded-md hover:bg-blue-600 transition-all outline-none"
                >
                Sign in
            </button>
        </form>
    )
}

