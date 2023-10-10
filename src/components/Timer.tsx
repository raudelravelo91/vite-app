import { useState, useEffect } from "react";

interface TimerProps{
    seconds: number;
    OnTimeOut: () => void;
}

function Timer({seconds, OnTimeOut}: TimerProps){
    const [stopTimer, setStopTimer] = useState(false);
    const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, seconds));

    useEffect(() => {
        let intervalId: any;
        let timeoutId: any;

        if(!stopTimer){
            intervalId = setInterval(() => {
                setTime(prevTime => new Date(prevTime.getTime() - 1000));
            }, 1000);

            timeoutId = setTimeout(() => {
                console.log("Timeout");
                OnTimeOut();
                setStopTimer(true);
            }, seconds * 1000);
        }
        else {
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