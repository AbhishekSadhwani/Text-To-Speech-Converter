import { useEffect, useRef, useState } from 'react'
import { VoiceOption } from './Controls/VoiceOption';
import { Pause, Play, RotateCcw, Square, Volume2, VolumeOff } from 'lucide-react';

export const Console = () => {
    const [text, setText] = useState("");
    const [voices, setVoices] = useState([]);
    const [volume, setVolume] = useState(0.2);
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused,setIsPaused] = useState(false);
    const utteranceRef = useRef(null);


    window.addEventListener("beforeunload",() => {
        speechSynthesis.cancel();
    });


    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices().map(voice => ({
            default: voice.default,
            name: voice.name,
            lang: voice.lang,
            gender: voice.name.toLowerCase().includes("female") ? "Female" : "Male" 
            }));
            
            setVoices(availableVoices);
        };

        loadVoices();
        if(speechSynthesis.onvoiceschanged !== undefined){
            speechSynthesis.onvoiceschanged = loadVoices;
        }
    },[]);

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    const handleVoiceChange = (voiceName) => {
        const voice = speechSynthesis.getVoices().find(v => v.name === voiceName);
        setSelectedVoice(voice || null);
    };


    const handlePlay = () => {
        if(text.trim() === "") return;

        if(utteranceRef.current){
            speechSynthesis.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.volume = volume;

        if(selectedVoice){
            utterance.voice = selectedVoice;
        }
        
        utterance.onend = () => {
            setIsPlaying(false);
        };

        utterance.onpause = () => {
            setIsPlaying(false);
        };

        utteranceRef.current = utterance;
        speechSynthesis.speak(utterance);
        setIsPlaying(true);
        setIsPaused(false);

    };

    const handlePause = () => {
        if(isPlaying){
            speechSynthesis.pause();
            setIsPaused(true);
            setIsPlaying(false);
        }
        else{
            speechSynthesis.resume();
            setIsPaused(false);
            setIsPlaying(true);
        }
    };

    const handleReset = () => {
        speechSynthesis.cancel();
        setText("");
        setIsPlaying(false);
        setIsPaused(false);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex flex-col bg-white shadow-lg border border-gray-100 rounded-xl">
                <VoiceOption voices={voices} handleVoiceChange={handleVoiceChange}/>
                <div>
                    <textarea onChange={(e) => setText(e.target.value)} className="text-lg outline-none p-6 resize-none w-full h-64" placeholder="Enter your text here..." value={text || ""} name="text" id="text" maxLength={5000}></textarea>
                </div>
                <div className="flex justify-between gap-3 p-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500 flex items-center justify-between">
                        <p>{text.length} / 5000 characters</p>
                    </div>
                    <div className="flex items-center text-gray-600 gap-2">
                        {
                        volume === 0 ? 
                            <VolumeOff onClick={() => setVolume(0.2)} className="h-5 w-5 cursor-pointer" /> 
                            : 
                            <Volume2 onClick={() => setVolume(0)} className="h-5 w-5 cursor-pointer" />
                        }
                        <input onChange={handleVolumeChange} type="range" min="0" max="1" step="0.1" value={volume} />
                        <span className="flex-1 mr-2">{Math.floor(volume*100)}%</span>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center gap-5 p-10'>
                    <button 
                        onClick={handlePlay} 
                        className="flex items-center justify-center gap-2 text-xl text-white w-32 p-2 rounded-xl disabled:cursor-not-allowed disabled:opacity-50 bg-blue-400" 
                        disabled={isPlaying || text.trim() === ''}
                        >
                            {isPaused ? <RotateCcw /> : <Play />}
                            {isPaused ? "Restart" : "Play"}
                    </button>

                    <button 
                        onClick={handlePause} 
                        className="flex items-center justify-center gap-2 text-xl text-white w-32 p-2 rounded-xl disabled:cursor-not-allowed disabled:opacity-50 bg-yellow-400" 
                        disabled={!isPlaying && !isPaused}
                        >
                            {isPaused ? <Play /> : <Pause />}
                            {isPaused ? "Resume" : "Pause"}


                    </button>
                    <button 
                        onClick={handleReset} 
                        className="flex items-center justify-center gap-2 text-xl text-white w-32 p-2 rounded-xl disabled:cursor-not-allowed disabled:opacity-50 bg-red-400" 
                        disabled={text.trim() === ''}
                        >
                            <Square /> Reset
                    </button>

                </div>
            </div>
        </div>
    )
}
