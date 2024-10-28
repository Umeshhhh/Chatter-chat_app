'use client';
import { createacc } from "@/app/actions/createacc";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInForm(){

    const [inputs, setInput] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });
    const router = useRouter();

    return(
        <form onSubmit={(e) => e.preventDefault()} className="w-full mt-3 flex flex-col px-5 py-3 gap-3 font-mukta">
            <div className="flex flex-col gap-1 w-full">
                <label className="text-lg font-semibold text-gray-600">First Name:</label>
                <input onChange={(e) => setInput({...inputs, firstName: e.target.value})} className="ring-1 ring-gray-400 outline-none p-2 rounded-lg focus:ring-blue-600 transition-all" type="text" placeholder="Enter your firstname" />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="text-lg font-semibold text-gray-600">Last Name:</label>
                <input onChange={(e) => setInput({...inputs, lastName: e.target.value})} className="ring-1 ring-gray-400 outline-none p-2 rounded-lg focus:ring-blue-600 transition-all" type="text" placeholder="Enter your lastname" />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="text-lg font-semibold text-gray-600">Username:</label>
                <input onChange={(e) => setInput({...inputs, username: e.target.value})} className="ring-1 ring-gray-400 outline-none p-2 rounded-lg focus:ring-blue-600 transition-all" type="text" placeholder="Enter your username" />
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="text-lg font-semibold text-gray-600">Password:</label>
                <input onChange={(e) => setInput({...inputs, password: e.target.value})} className="ring-1 ring-gray-400 outline-none p-2 rounded-lg focus:ring-blue-600 transition-all" type="password" placeholder="Enter your password" />
            </div>
            <button 
                onClick={async () => {
                    const res = await createacc(inputs);
                    if(res){
                        router.push('/signin');
                    }else{
                        alert('error');
                    }
                    // const res = await axios.post('http://localhost:3000/api/signup', inputs);
                    // if(res.data.resp){
                    //     router.push('/chats');
                    // }
                }}
                className="p-2 mt-2 bg-blue-500 text-white font-semibold rounded-3xl text-xl hover:rounded-md hover:bg-blue-600 transition-all outline-none"
                >
                Sign up
            </button>
        </form>
    )
}

