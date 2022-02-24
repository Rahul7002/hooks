import React,{useContext} from 'react'
import { CountContext } from '../../App'
function ComponentF() {
  const useFull=useContext(CountContext)
  return (
    <div>
    <button onClick={() => useFull.countDispatch("increment")}>
      Increment
    </button>
    <button onClick={() => useFull.countDispatch("decrement")}>
      Decrement
    </button>
    <button onClick={() => useFull.countDispatch("reset")}>
      Reset
    </button></div>
  )
}

export default ComponentF