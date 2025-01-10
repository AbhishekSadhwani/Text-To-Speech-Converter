import { Pause, Play, RotateCcw } from 'lucide-react'
import React from 'react'

const Button = ({func,buttonText, className, text, isPlaying}) => {
    const isDisbaled = (text.length ? false : true);
    return (
        <button onClick={func} className={`flex items-center justify-center gap-2 text-xl text-white w-32 p-2 rounded-xl ${className} ${isDisbaled ? "cursor-not-allowed opacity-50":"cursor-pointer opacity-100"}`} disabled={isDisbaled ? "disabled" : ""}>
            {buttonText === "Play" && <Play />}
            {buttonText === "Pause" && <Pause />}
            {buttonText === "Resume" && <Play />}
            {buttonText === "Reset" && <RotateCcw />}
            {buttonText}
        </button>
    )
}


export default Button