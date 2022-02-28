import React, { useReducer } from "react";
// import ArrayMap from "./Components/ArrayMap";
// import Input3 from "./Components/Input3";
// import EffectHook from "./Components/EffectHook";
// import HookMouse from "./Components/HookMouse";
// import HookCleanup from "./Components/HookCleanup";
// import IncorrectHooks from "./Components/IncorrectHooks";
// import FetchingData from "./ComponentUse/FetchingData";
// import SingleFetch from "./ComponentUse/SingleFetch";
// import ComponentC from "./Components/ContextApi/ComponentC";
import "./App.css";
import UseReducer_useEffect from "./Components/DataFetching/UseReducer_useEffect";
import UseState_useEffect from "./Components/DataFetching/UseState_useEffect";
import ParentComponent from "./Components/UseCallbackHook/ParentComponent";
import Counter from "./Components/useMemoHook/Counter";
import CounterTwo from "./Components/useReducer/CounterTwo";
import MultipleHookReducer from "./Components/useReducer/MultipleHookReducer";
import ClassTimer from "./Components/useRefHook/ClassTimer";
import FocusInput from "./Components/useRefHook/FocusInput";
import FunctionalTimer from "./Components/useRefHook/FunctionalTimer";
import ComponentA from "./Components/useResucer+useContext/ComponentA";
import ComponentB from "./Components/useResucer+useContext/ComponentB";
import ComponentC from "./Components/useResucer+useContext/ComponentC";
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();


const initialState = 0;
const reducer = (state, action) => {
    console.log(state)
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
 
};
export const CountContext=React.createContext()

function App() {
  const [count,dispatch]=useReducer(reducer,initialState);
  return (
    // <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>

    <div className="App">
      {/* <UserContext.Provider value={"rahul"}>
        <ChannelContext.Provider value={"code evolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    <ClassTimer />
    <FunctionalTimer />
    </div>
    // </CountContext.Provider>
  );
}

export default App;
