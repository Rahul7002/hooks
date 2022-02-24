import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 5,
};
const reducer = (state, action) => {
  console.log(state.type);
  switch (action.type) {
    case "increment":
      return { ...state,firstCounter:state.firstCounter + action.value };
    case "decrement":
      return { ...state,firstCounter: state.firstCounter - action.value };
    case "increment2":
      return {...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state,secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(initialState);
  return (
    <div>
      <h1>Count {count.firstCounter}  Second  {count.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Icrement
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Icrement by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 10 })}>
        Decrement by 10
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Icrement counter2 
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement counter 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
