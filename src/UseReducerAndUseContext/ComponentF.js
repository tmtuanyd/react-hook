import React, {useContext} from 'react';
import {CountContext} from "../App";

const ComponentF = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentF
            <div>Count {countContext.state.count}</div>
            <button onClick={()=>countContext.dispatch({type: 'increment'})}>Increment</button>
            <button onClick={()=>countContext.dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={()=>countContext.dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
};

export default ComponentF;