import {PauseCircle, Volume2, VolumeOff} from "lucide-react";
import { useState } from "react";

export const Play = () => {
    const [volume, setVolume] = useState(10);

    const handleVolumeChange = (e) => {
        setVolume(parseInt(e.target.value));
    };


    return (
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button>
                        <PauseCircle className="h-10 w-10 text-indigo-600 hover:text-indigo-700" />
                    </button>
                    <div className="flex-1">
                        <div className="bg-gray-200 rounded-full h-2 mb-2">
                            <div className="bg-indigo-600 h-2 rounded-full w-1/3"></div>
                        </div>
                        <div className="flex text-sm text-gray-500">
                            <span>1:23</span>
                            <span>3:45</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center text-gray-600 gap-4">
                    {
                    volume === 0 ? 
                        <VolumeOff onClick={() => setVolume(volume+10)} className="h-5 w-5 cursor-pointer" /> 
                        : 
                        <Volume2 onClick={() => setVolume(0)} className="h-5 w-5 cursor-pointer" />
                    }
                    <input onChange={handleVolumeChange} type="range" min="0" max="100" step="1" value={volume} />
                    <span className="mr-2">{volume}%</span>
                </div>
            </div>
        </div>
  )
};