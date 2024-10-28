

export default function NavBar(){

    return(
        <div className="bg-white flex items-center px-8 py-4 justify-between">
            <h1 className="text-4xl font-updock text-gray-800 font-semibold tracking-wider cursor-pointer">Chatters</h1>
            <div className="h-10 w-10 rounded-full bg-black flex place-content-center items-center shadow-lg shadow-gray-400 cursor-pointer">
                <p className="text-white font-semibold">UK</p>
            </div>
        </div>
    )
}