import React, { useState } from 'react'

function Input3() {

  const [name,setName]=useState({firstName:'', lastName:''})
  console.log(name);
  return (
    <div className='input'>
    <h1>Hello World</h1>
   
    <input type='text' value={name.firstName} onChange={e =>setName({...name,firstName:e.target.value})}></input>
    <input type='text' value={name.lastName} onChange={e =>setName({...name,lastName:e.target.value})}></input>
    <input type='text' />
    <h4>{JSON.stringify(name)}</h4>
    </div>
  )
}

export default Input3;