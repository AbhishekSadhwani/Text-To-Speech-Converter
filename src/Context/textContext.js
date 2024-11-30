import { createContext, useContext, useReducer } from "react";
import { textReducer } from "../Reducer/textReducer";

const initialState = {
    text:"",
    text_length:0,
};


const textContext = createContext(initialState);

export const ContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(textReducer, initialState);
    
    const addText = (newText) => {
        dispatch({
            type:"ADD_TEXT_CONTENT",
            payload:{
                text:newText
            }
        });
    };


    const clearText = () => {
        dispatch({
            type:"CLEAR_TEXT",
            payload:{
                text:""
            }
        });
    };


    const value = {
        text:state.text,
        text_length:state.text_length,
        addText,
        clearText
    };

    return (
        <textContext.Provider value={value}>
            {children}
        </textContext.Provider>
    )

};

export const useTextContext = () => {
    const context = useContext(textContext);
    return context;
};

