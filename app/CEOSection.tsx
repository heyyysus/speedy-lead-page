import Image from "next/image";


export const CEOSection = () => {
    return(
    <div className="flex flex-col w-full py-20 bg-white mt-10 items-center">
        <div className="flex flex-row max-w-256 items-center">
            <Image className="rounded-md" src="/tony_portrait.png" width={128} height={192} alt="Tony Dabouqi CEO" />
            <div className="ml-5">
                <h1 className="text-xl font-semibold">Tony Dabouqi</h1>
                <h2>CEO of Speedy Insurance Agency</h2>
            </div>
        </div>
         
    </div>);
}