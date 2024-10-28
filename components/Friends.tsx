import { allusers } from "@/app/actions/allusers";
import GlobalChat from "./GlobalChat";

export default async function Friends(){

    const allUsers = await allusers() || [];

    return(
        <div className="h-[460px] px-1 flex flex-col gap-2 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-400">
            <GlobalChat />
            {/* {allUsers.map((user,i) => {
                
                return(
                    <User key={i} name={user.firstName + user.lastName} id={user.id} mssg="Hii there!..." time="2m ago" />
                )
            })} */}
        </div>
    )
}