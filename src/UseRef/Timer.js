import React, {useEffect, useRef, useState} from 'react';

const Timer = () => {
    const [timer, setTimer] = useState(0)
    const interval = useRef()
    useEffect(()=>{
         interval.current = setInterval(()=>{
            setTimer(preTimer => preTimer + 1)
        }, 1000)
        return () => clearInterval(interval.current)
    }, [])
    return (
        <div>
            Timer - {timer}
            <button onClick={() => clearInterval(interval.current)}>clear hook timer</button>
        </div>
    );
};

export default Timer;