import { useState } from "react";

export interface MessageProps{
    message: string;
}

function Message({message}: MessageProps){
    const [modifiedMessage, setModifiedMessage] = useState(message.toLowerCase());
    const [isUpperCase, setIsUpperCase] = useState(false);
    
    function handleClick(){
        setModifiedMessage(isUpperCase ? modifiedMessage.toLowerCase(): modifiedMessage.toUpperCase());
        setIsUpperCase(!isUpperCase);
    }

    return( 
        <div style={{ border: '2px solid black', padding: '10px', display: 'inline-block', margin: '2px'}}>
            <h2>Original Message: {message}</h2>
            <h2>Modified Message: {modifiedMessage}</h2>
            <button onClick={handleClick}>{(isUpperCase) ? "To Lower" : "To Upper"}</button>
        </div>
    );
}

export default Message;