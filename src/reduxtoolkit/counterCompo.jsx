import { increment,decrement } from "./counterSlice";
import { useDispatch,useSelector } from "react-redux";

const CounterComponent = ()=>{
    let dispatch = useDispatch()
    const counter = useSelector((state)=>state.counter.value)
    return(
        <>
        {counter}
        <button onClick={()=>{dispatch(increment())}}>increment</button>
        <button onClick={()=>{dispatch(decrement())}}>decrement</button>
        </>
    )
}

export default CounterComponent;
