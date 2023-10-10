import { useState, useEffect } from "react";

interface TimerProps{
    seconds: number;
    OnTimeOut: () => void;
    stopTimer: boolean;
}

function Timer({seconds, OnTimeOut, stopTimer}: TimerProps){
    const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, seconds));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prevTime => new Date(prevTime.getTime() - 1000));
        }, 1000);

        const timeoutId = setTimeout(() => {
            console.log("Timeout executed");
            OnTimeOut();
        }, seconds * 1000);

        if (stopTimer) {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        }

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };

    }, [stopTimer]);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const remainingSeconds = time.getSeconds().toString().padStart(2, '0');

    return( 
        <div style={{ border: '2px solid black', padding: '5px', display: 'inline-block', margin: '2px'}}>
            <h3>Time: {hours}:{minutes}:{remainingSeconds}</h3>
        </div>
    );
}

export default Timer;