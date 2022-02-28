import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
      console.log('useeffext called')
      window.addEventListener('mousemove',logMousePosition);
      return()=>{
          window.removeEventListener('mousemove',logMousePosition)
      }
  },[]);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div>
      <h1>HookMouse</h1>
      Hooks X-{x} Y-{y}
    </div>
  );
}

export default HookMouse;
