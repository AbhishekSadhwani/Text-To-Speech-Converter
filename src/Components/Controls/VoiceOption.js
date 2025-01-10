
export const VoiceOption = ({voices, handleVoiceChange}) => {
    return (
        <div className="p-4 border-b border-gray-100 overflow-hidden">
            <select onChange={(e) => handleVoiceChange(e.target.value)} className="w-2/3 bg-gray-50 text-slate-700 border rounded-lg py-2 px-4 outline-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" name="" id="">
                <option value="">Default Voice</option>
                {voices.map((voice,index) => (
                    <option key={index} value={voice.name}>{voice.name} - {voice.lang} </option>
                ))}
            </select> 
        </div>
    )
}

