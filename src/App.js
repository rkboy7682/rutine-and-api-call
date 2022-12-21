import React from "react";
import Home from "./Home";
import Layout from "./Layout";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from "./Contact";
import Counter from "./Counter";
import Demoaxios  from "./Demoaxios";
import Extra   from "./Extra";
import Contact2 from "./Contact2";

    
function App(x){    
    return(
        <div style={{backgroundColor:"lightblue"}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Counter" element={<Counter/>}/>
                <Route path="/Demoaxios" element={<Demoaxios/>}/>
                <Route path="/Extra" element={<Extra/>}/>

                <Route path="/Contact2" element={<Contact2/>}/>
            </Routes>
            </BrowserRouter>
            <h1 style={{color:"red"}}>HELlO , my name is {x.name}</h1>
        </div>
    )

}
export default App; 