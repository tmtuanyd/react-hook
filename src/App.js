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
import DataFetchingOne from "./UseReducerWithFetchingData/DataFetchingOne";
import DataFetchingTwo from "./UseReducerWithFetchingData/DataFetchingTwo";
import ParentComponent from "./UseCallback/ParentComponent";
import CounterMemo from "./UseMemo/CounterMemo";
import FocusInput from "./UseRef/FocusInput";
import Timer from "./UseRef/Timer";
import DocTitleOne from "./CustomHook/DocTitleOne";
import CounterCustom from "./CustomHook/CounterCustom";

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()
export const FetchContext = React.createContext()
const initialState = {
    count: 0,
}
const initialStateFetch = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + 1}
        case 'decrement':
            return {...state, count: state.count - 1}
        case 'reset':
            return {...state, count: initialState.count}
        default:
            return state
    }
}

const reducerFetching = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [stateFetch, dispatchFetch] = useReducer(reducerFetching, initialStateFetch)
  return (
      <React.Fragment>
          <CountContext.Provider value={{ state, dispatch }}>
              <FetchContext.Provider value={{stateFetch, dispatchFetch}}>
                  <div className="App">
                      {/*<UserContext.Provider value={'TMT'}>*/}
                      {/*    <ChannelContext.Provider value={'Codevolution'}>*/}
                      {/*        <ComponentC/>*/}
                      {/*    </ChannelContext.Provider>*/}
                      {/*</UserContext.Provider>*/}
                      {/*<CounterThree/>*/}
                      {state.count}
                      <ComponentA/>
                      <ComponentB/>
                      <ComponentC/>
                      {/*<DataFetchingOne/>*/}
                      <DataFetchingTwo/>
                  </div>
              </FetchContext.Provider>
          </CountContext.Provider>
          <ParentComponent/>
          <CounterMemo/>
          <FocusInput/>
          <Timer/>
          <DocTitleOne/>
          <CounterCustom/>
      </React.Fragment>


  );
}

export default App;
