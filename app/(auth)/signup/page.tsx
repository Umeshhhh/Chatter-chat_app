import SignInUp from "@/components/SignInUp";
import SignUpForm from "@/components/SignUpForm";


export default function(){

    return(
        <div className="h-screen w-full flex items-center place-content-center">
            <div className="w-2/5 p-4 flex flex-col items-center border">
                <h1 className="text-3xl font-mukta font-semibold">Sign up to <span className="font-updock text-blue-500">Chatters</span></h1>
                <SignInUp para="Already have an account" text="Sign in" route="/signin" />
                <hr className="h-px w-full mt-2 bg-gray-300 border-0"></hr>
                <SignUpForm />
            </div>
        </div>
    )
}

