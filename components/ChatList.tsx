import SearchBar from "./SearchBar"
import Friends from "./Friends"
import BarsList from "./BarsList"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function ChatList(){

    const session = await getServerSession(authOptions);

    return(
        <div className="h-screen flex flex-col overflow-hidden">
            <section className="flex justify-between px-4 py-3 font-mukta items-center">
                <h1 className="text-xl font-semibold">Chats</h1>
                <BarsList />
            </section>
            <hr className="h-px bg-gray-300 border-1"></hr>
            <p className="text-white py-4 text-xl font-semibold px-4 font-mukta text-center bg-black rounded-xl">@{session?.user.firstName}...</p>
            <section className="flex place-content-center items-center py-3 px-5 font-mukta">
                <SearchBar />
            </section>
            <section>
                <Friends />  
            </section>
        </div>
    )
}