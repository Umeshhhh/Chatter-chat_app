'use client';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function BarsList(){

    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    return(

        <div className="relative h-9 w-9 rounded-xl flex items-center place-content-center cursor-pointer hover:bg-gray-100 transition-all">
            <FontAwesomeIcon onClick={() => setIsVisible(prev => !prev)} className="h-5 w-5" size='2x' icon={faBars} />
            {isVisible &&
                <section className="absolute w-32 top-10 z-50 right-0 flex items-center place-content-center rounded-xl bg-gray-800">
                    <ul className="flex flex-col w-full h-full text-white rounded-xl items-center place-content-center py-2 font-mukta">
                        <li onClick={() => {
                            signOut();
                            router.push('/signin');
                        }} className="w-full text-center text-md p-3 rounded-xl font-semibold hover:bg-gray-700">Sign out</li>
                    </ul>
                </section> 
            } 
        </div>
    )
}