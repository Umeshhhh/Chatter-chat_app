import ChatList from "@/components/ChatList";
import Chats from "@/components/Chats";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";


export default async function() {

  const session = await getServerSession(authOptions);
  if(!session?.user){
    redirect('/signin');
  }


  return (
    <div className="max-h-screen w-full bg-black overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-7 lg:grid-cols-7">
        <div className="h-full w-full overflow-y-auto md:col-span-2 lg:col-span-2 bg-white border-r-2 border-gray-200">
            <ChatList />
        </div>
        <div className="h-full overflow-y-auto hidden md:block md:col-span-5 lg:block lg:col-span-5 bg-gray-800">
            <Chats />
        </div>
      </div>
    </div>
  );
}

