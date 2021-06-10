import React, {useState} from 'react';

const HookCounter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState({firstName: '', lastName: ''})
    const [items, setItems] = useState([])
    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    const addItem = () => {
        setItems([...items, {id: items.length, value: Math.floor(Math.random()*10) + 1}])
    }
    return (
        <div>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Count {count}</button>
            <button onClick={incrementFive}>Count {count}</button>
            <form action="">
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({...name, firstName: e.target.value})}/>
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({...name, lastName: e.target.value})}/>
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
            </form>
            <div>
                <button onClick={addItem}>Add a number</button>
                <ul>
                    {
                        items.map(item => (
                            <li key={item.id}>{item.value}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default HookCounter;