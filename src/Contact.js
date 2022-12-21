import { useState } from "react";
import Layout from "./Layout";

function Contact(){
    const[value,SetValue]=useState(1);
    function change(){
        return(SetValue(value+1));
    }
    return(<div>
        <h1>This is Contact page and value is {value}</h1>
        <button type="button" onClick={change}>upadate</button>
        <Layout/>
    </div>)
}
export default Contact;