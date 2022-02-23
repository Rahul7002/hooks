import React, { useState } from 'react'
import HookMouse from './HookMouse';

function HookCleanup() {
const [display, setDisplay] = useState(true);


  return (
    <div><h1>HookCleanup</h1>
    <button onClick={()=>setDisplay(!display)}>toggle</button>
    {
        display && <HookMouse/>
    }
    </div>
  )
}

export default HookCleanup