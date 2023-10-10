import { useState } from "react";
import Timer from "./Timer";

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

    function onTimeOut(){
        //do nothing
    }

    return( 
        <div style={{ border: '2px solid black', padding: '10px', display: 'inline-block', margin: '2px'}}>
            <Timer seconds={5} OnTimeOut={onTimeOut} />
            <h2>Original Message: {message}</h2>
            <h2>Modified Message: {modifiedMessage}</h2>
            <button onClick={handleClick}>{(isUpperCase) ? "To Lower" : "To Upper"}</button>
        </div>
    );
}

export default Message;