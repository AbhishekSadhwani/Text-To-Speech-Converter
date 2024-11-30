import {Settings} from "lucide-react";

export const ActionButton = () => {
    return (
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <div className="flex gap-4 flex-wrap">
                <select className="bg-gray-50 text-slate-700 border rounded-lg py-2 px-4 outline-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" name="" id="">
                    <option value="en-US">English (US)</option>
                    <option value="en-GB">English (UK)</option>
                    <option value="es-ES">Spanish</option>
                    <option value="fr-FR">French</option>
                </select> 
                <select className="bg-gray-50 text-slate-700 border rounded-lg py-2 px-4 outline-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" name="" id="">
                    <option value="">Female Voice</option>
                    <option value="">Male Voice</option>
                </select>    
            </div>
            <button className="text-gray-600 hover:text-gray-700">
                <Settings className="h-5 w-5"/>
            </button>
        </div>
    )
}

