
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export default function SearchBar(){

    return(
        <div className="relative w-full flex items-center">
            <FontAwesomeIcon color={`gray`} className={`absolute left-3 h-4 w-4`} icon={faSearch} />
            <input className="w-full rounded-md ring-1 ring-gray-400 p-2 pl-10 outline-none transition-all focus:ring-black" type="text" placeholder="Search chats..." />
        </div>
    )
}