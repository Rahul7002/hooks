import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchingData() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log('this is response',res)
      setPosts(res.data)
    })
    .catch(err=>{
      console.log('this is error',err)
    })
  },[]);
  return (
    <div><h1>FetchingData</h1>
     
     <ul>
       {
         posts.map(any =>(
           <li> {any.userId}) {any.title}</li>
         ))
       }
     </ul>
    
    </div>
  )
}

export default FetchingData