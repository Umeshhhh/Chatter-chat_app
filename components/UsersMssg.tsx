

export default function UsersMssg({mssg, user, time}:{mssg:string, user: string, time:string}){

    return(
        <div className="w-full flex justify-start">
            <section className="max-w-3xl h-fit p-4 bg-gray-300 rounded-3xl text-black font-semibold flex flex-col justify-end">
            <section className="flex justify-between gap-2">
                    <h1 className="text-xs text-gray-500">~{user}</h1>
                    <p className="text-xs text-gray-500">-{time}</p>
                </section>
            <p>{mssg}</p>
            </section>
        </div>
    )
}