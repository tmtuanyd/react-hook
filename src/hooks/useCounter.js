import React, {useState} from 'react';

const useCounter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(preCount => preCount + 1)
    }
    const decrement = () => {
        setCount(preCount => preCount - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return [count, increment, decrement, reset]
};

export default useCounter;