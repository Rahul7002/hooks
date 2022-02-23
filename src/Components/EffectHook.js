import React, { useEffect, useState } from "react";

const EffectHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("hello count", name);
    document.title = `You clicked ${count} ${name}times`; 
  },[count]);

  return (
    <div>
      <h1>EffectHook</h1>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Click {count}
      </button>
    </div>
  );
};

export default EffectHook;
