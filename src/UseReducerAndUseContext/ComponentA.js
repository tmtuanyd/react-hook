import React, {useContext} from 'react';
import {CountContext} from "../App";

const ComponentA = () => {
    const countContext = useContext(CountContext)
    console.log(countContext)
    return (
        <div>
            ComponentA
            {/*<div>Count {countContext.countState}</div>*/}
            <button onClick={()=>countContext.dispatch({type: 'increment'})}>Increment</button>
            <button onClick={()=>countContext.dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={()=>countContext.dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
};

export default ComponentA;