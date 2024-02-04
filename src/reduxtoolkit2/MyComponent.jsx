import {setFetchdata } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
const MyComponent = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.counter.value)
      return(
        <>
        {counter}
           <button onClick={()=>{dispatch(setFetchdata())}}>fetch data</button>
           
        </>
      )
}

export default MyComponent;