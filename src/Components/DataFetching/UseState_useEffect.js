import React, { useEffect, useState } from "react";
import axios from "axios";

function UseState_useEffect() {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState('')
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        console.log("this is response", res);
        setLoading(false)
        setPosts(res.data);
        setError('')
      })
      .catch(error => {
        setLoading(false)
        console.log("this is error", error);
        setPosts({})
        setError('something wrong is there')
      });
  }, []);
  return (
    <div>
      <h1>FetchingData with useState + useEffect</h1>
      {loading ?'Loading':posts.title}
      {error ? 'errror occured':null}
      
    </div>
  );
}

export default UseState_useEffect;
