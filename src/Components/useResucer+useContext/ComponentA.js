import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentA() {
  const countContextA = useContext(CountContext);
  return (
    <div>
      ComponentA
      <h1>Count {countContextA.countState}</h1>
      <button onClick={() => countContextA.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContextA.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContextA.countDispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default ComponentA;
