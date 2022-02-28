import React, { useEffect, useState } from 'react'

function IncorrectHooks() {
const [count, setCount] = useState(0);
const [someProp,setSomeProp]=useState('Soomedsv')

const tick=()=>{
    setCount(a=>a+1)
}
const doSomething=()=>{
    console.log(someProp)
}

useEffect(() => {
    
    doSomething()
    console.log('useeffect is working',count)
   const interval=setInterval(tick,1000);
   return ()=>{
       clearInterval(interval)
   }
},[count]);

  return (
    <div>
    <h1>IncorrectHooks</h1>
    <h1>helloo {count}</h1>
    </div>
  )
}

export default IncorrectHooks