

export default function MyMssg({mssg, user, time}:{mssg:string, user: string, time: string}){

    return(
        <div className="w-full flex justify-end">
            <section className="max-w-3xl h-fit p-4 bg-blue-500 rounded-3xl text-white font-semibold flex flex-col justify-start">
                <section className="flex justify-between gap-2">
                    <h1 className="text-xs text-gray-100">~{user}</h1>
                    <p className="text-xs text-gray-100">-{time}</p>
                </section>
                <p>{mssg}</p>
            </section>
        </div>
    )
}