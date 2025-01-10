import { useState } from "react";
import { ActionButton } from "./Controls/VoiceOption";
import { useTextContext } from "../Context/textContext";


export const Input = () => {
  const {addText, text} = useTextContext();
  const [selectedLanguage, setSelectedLanguage] = useState(null);
 
  return (
    <div className="mb-8 flex flex-col bg-white shadow-lg border border-gray-100 rounded-xl">
        {/* <ActionButton selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        <div>
            <textarea onChange={(e) => addText(e.target.value)} className="outline-none p-6 resize-none w-full h-64" placeholder="Enter your text here..." value={text || ""} name="text" id="text"></textarea>
        </div>
        <ControlsBar /> */}
    </div>
  );
};
