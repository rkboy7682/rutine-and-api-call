import { useEffect, useState } from "react";
import Layout from "./Layout";
function Counter() {
    const [count, Setcount] = useState(0);
    const[mul,setmul]=useState(0)
    useEffect(()=>{
        setmul(()=>count*2)} ,[count])

    return(
    <div>
        <Layout/>
        <h1>your counter is updating :{count}</h1>
        <h1>your counter is updating :{mul}</h1> 
        <button type="button" onClick={()=>Setcount((c)=>c+1)}>+</button>
    </div>)
}
export default Counter;