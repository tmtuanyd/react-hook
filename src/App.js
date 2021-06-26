import './App.css';
import DataFetching from "./DataFetching";
// import ComponentC from "./UseContext/ComponentC";
import React, {useReducer} from 'react'
import CounterOne from "./UseReducer/CounterOne";
import CounterTwo from "./UseReducer/CounterTwo";
import CounterThree from "./UseReducer/CounterThree";
import ComponentA from "./UseReducerAndUseContext/ComponentA";
import ComponentB from "./UseReducerAndUseContext/ComponentB";
import ComponentC from "./UseReducerAndUseContext/ComponentC";

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function App() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
          <div className="App">
              {/*<UserContext.Provider value={'TMT'}>*/}
              {/*    <ChannelContext.Provider value={'Codevolution'}>*/}
              {/*        <ComponentC/>*/}
              {/*    </ChannelContext.Provider>*/}
              {/*</UserContext.Provider>*/}
              {/*<CounterThree/>*/}
              {count}
              <ComponentA/>
              <ComponentB/>
              <ComponentC/>
          </div>
      </CountContext.Provider>

  );
}

export default App;
