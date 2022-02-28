import React, { useEffect, useState,useRef } from 'react'

function FunctionalTimer() {

    const intervalRef=useRef();
    const [timer, setTimer]=useState(0)
    useEffect(() => {
         intervalRef.current = setInterval(()=>{
            setTimer(timer+1)
        },1000)
        
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [timer]);
  return (
    <div>FunctionalTimer {timer}
    <button onClick={()=>clearInterval(intervalRef.current)}> Functional clear</button>
    </div>
  )
}

export default FunctionalTimer