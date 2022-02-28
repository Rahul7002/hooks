import React, { useEffect, useRef } from 'react'

function FocusInput() {

    const input=useRef(null)
useEffect(() => {
   input.current.focus()
}, []);

  return (
    <div>
    <input type='text' ref={input} onChange={(e)=>(e.target.value, 
    console.log(e.target.value))}/>
    </div>
  )
}

export default FocusInput