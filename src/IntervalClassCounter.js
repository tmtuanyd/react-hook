import React, {useEffect, useState} from 'react';

const IntervalClassCounter = () => {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        return () => {
            console.log('co vo day')
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            {count}
        </div>
    );
};

export default IntervalClassCounter;