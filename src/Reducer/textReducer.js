

export const textReducer = (state,action) => {
    const {type,payload} = action;

    switch (type) {
        case "ADD_TEXT_CONTENT":
            return {...state,text:payload.text,text_length:payload.text.length};
        
        case "CLEAR_TEXT":
            return {...state,text:payload.text,text_length:payload.text.length};

        default:
            throw new Error("No case found");
    }
};