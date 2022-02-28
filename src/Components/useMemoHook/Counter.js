import React, { useCallback, useState ,useMemo} from 'react'

function Counter() {
    
    const [counterOne, setCounterOne]=useState(0)
    const [counterTwo, setCounterTwo]=useState(0)
 
     const incrementOne=()=>{
         setCounterOne(counterOne+1)
     }
     const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven=useMemo(()=>{
        // let i=0
        // while(i<200000000) i++
        console.log('Even Function is rendering')
        return counterOne % 2 ===0
    },[counterOne])
  return (
    <div><h1>Counter 1: {counterOne}</h1>
    <span> {isEven ? 'even':'odd'}</span>
          <h1>Counter 2: {counterTwo}</h1>
    <button onClick={incrementOne} > CounterOne</button>
    <button onClick={incrementTwo} >CounterTwo</button>
    </div>
  )
}

export default Counter