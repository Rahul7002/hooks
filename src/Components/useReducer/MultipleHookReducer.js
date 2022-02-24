import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state);
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

function MultipleHookReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo]=useReducer(reducer,initialState);
  console.log(initialState);
  return (
    <div>
    <h1>Count {count}</h1>
      <button onClick={() => dispatch("increment")}>Icrement</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <h1>MultipleHookReducer</h1>
      <h1>Count {countTwo}</h1>
      <button onClick={() => dispatchTwo("increment")}>Icrement</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
}

export default MultipleHookReducer;
