import React, {useEffect, useRef} from 'react';

const FocusInput = () => {
    const inputRef = useRef(null)
    useEffect(()=>{
        //focus the input element
        inputRef.current.focus()
        inputRef.current.value = 'Hello'
    }, [])
    return (
        <div>
            <input ref={inputRef} type="text"/>
        </div>
    );
};

export default FocusInput;