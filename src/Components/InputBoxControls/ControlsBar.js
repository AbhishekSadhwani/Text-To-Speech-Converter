import { useEffect, useState } from "react";
import {Mic, Download, RotateCcw, PlayCircle} from "lucide-react";
import { useTextContext } from "../../Context/textContext";

export const ControlsBar = () => {
  const {text, text_length, clearText} = useTextContext();

  const [voices,setVoices] = useState([]);
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);

  useEffect(() => {
    setVoices(synth.getVoices());
  },[synth]);

  console.log(voices);

  const handlePlay = () => {
    synth.cancel();
    utterance.voice = voices[11];
    synth.speak(utterance);
 
  }
  const handleReset = () => {
    synth.cancel();
    clearText();
  };


  return (
    <div className="flex justify-between items-center flex-wrap gap-3 p-4 border-t border-gray-100">
        <div className="text-sm text-gray-500 flex items-center justify-between">
            <Mic className="h-4 w-4 mr-2" />
            <p>{text_length} / 5000 characters</p>
        </div>
        <div className="text-gray-600 flex items-center gap-5">
            <button onClick={handleReset} className="hover:text-gray-700">
              <RotateCcw className="h-5 w-5 mr-2" />
            </button>
            <button className="hover:text-gray-700">
              <Download className="h-5 w-5" />
            </button>
            <button onClick={handlePlay} className="outline-none bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg flex items-center">
                <PlayCircle className="h-5 w-5 mr-2" />
                Convert to Speech
            </button>
        </div>
    </div>
  )
}

