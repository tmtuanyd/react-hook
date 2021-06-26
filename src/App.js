import './App.css';
import DataFetching from "./DataFetching";
import ComponentC from "./UseContext/ComponentC";
import React from 'react'
import CounterOne from "./UseReducer/CounterOne";
import CounterTwo from "./UseReducer/CounterTwo";

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
        {/*<UserContext.Provider value={'TMT'}>*/}
        {/*    <ChannelContext.Provider value={'Codevolution'}>*/}
        {/*        <ComponentC/>*/}
        {/*    </ChannelContext.Provider>*/}
        {/*</UserContext.Provider>*/}
        <CounterTwo/>
    </div>
  );
}

export default App;
