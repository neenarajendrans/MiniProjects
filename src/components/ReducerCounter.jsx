import { useReducer } from "react"
import Button from "./Button"
function valueReducer(state,action){
    if(action ==="increase"){
        return state + 1;
    }else{
        return state - 1;
    }
}
function ReducerCounter(){

    const [value,dispatch] = useReducer(valueReducer,0)
    return(
        <>
           <p>Counter using useReducer</p>
             <h1>{value}</h1>
             <Button color={"pink"} handleClick ={()=>dispatch('decrease')}>-</Button>
             <Button color={"yellow"} handleClick ={()=>dispatch('increase')}>+</Button>
        </>
    )
}
export default ReducerCounter
