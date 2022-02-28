import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState={
    loading:true,
    error:'',
    post:{}
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'fetch_success':
            return {
                loading:false,
                post:action.payload,
                error:''
            }
        case 'fetch_error':
            return {
                loading:false,
                post:{},
                error:'Something went wrong'
            }    
        default :
            return state    
    }
}


function UseReducer_useEffect() {

const [state,dispatch]=useReducer(reducer,initialState)
useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({type:'fetch_success',payload: res.data})
      })
      .catch(error => {
        dispatch({type:'fetch_error'})
      });
  },[]);
  return (
    <div>UseReducer_useEffect
    
    <h1>FetchingData with useReducer + useEffect </h1>
      {state.loading ?'Loading_':state.post.title}
      {state.error ? state.error :null}
    
    </div>
  )
}

export default UseReducer_useEffect