import React, { useEffect, useState } from "react";
import axios from "axios";

function SingleFetch() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [idOnClick,setIdOnClick]=useState(1);
  const handleClick=()=>{
        setIdOnClick(id)
  }  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idOnClick}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("this is error", err);
      });
  }, [idOnClick]);
  return (
    <div>
      <h1>SingleFetch</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>FetchPost</button>
      <h2>
        {posts.id}_{posts.title}
      </h2>
    </div>
  );
}

export default SingleFetch;
