import { Artist } from "./Artist";

export const PlayList: React.FC = () => {
    return (
        <div className="bg-gray-900 w-2/3 p-10 overflow-scroll h-screen">
            <h1 className="text-lg font-bold mb-5">Good Morning</h1>
            <div className="grid grid-cols-3 gap-5">
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
                <Artist />
            </div>
            <div className="mt-10">
                <h1 className="text-lg">The Top Podcast of 2020</h1>
                <p className="text-gray-400">Our favorite new shows of the year</p>
                
            </div>
        </div>
    )
}
