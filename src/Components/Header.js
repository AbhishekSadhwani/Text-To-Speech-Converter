import {Volume2} from "lucide-react";

export const Header = () => {
  return (
    <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
            <Volume2 className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-4xl font-bold text-slate-800">VoiceFlow</h1>
        </div>
        <p className="text-slate-500">Transform your text into natural-sounding speech</p>
    </div>
  )
};
