import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'


export default async function Home() {

  const session = await getServerSession();
  if(session?.user.username){
    redirect('/chats');
  }else{
    redirect('/signin');
  }

  return (

    <div className="h-screen w-full bg-black">
      
    </div>
  );
}
