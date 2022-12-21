import {useState } from "react";
import axios from "axios";

function Demoaxios() 
{
const [data, setData] = useState([]);
    const getjoke = () => {
    axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8').then((response) => {
        console.log(response)
        setData(response.data);
        }
        )
        .catch(error=>{console.log(error);})
    }
return (
    <div>
    <h1>now we going to fetch  data </h1>
    <table border="1px">
        <thead> 
        <tr>
            <th>key</th>
            <th>name</th>
            <th>city</th>
        </tr>
        </thead>
        <tbody>
        {data?
        (data).map((item,index)=>{
        return(  
            <tr> 
                <td>{item.key}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
            </tr>
        )
      }
        ): <tr>data missing</tr>
    } 
    </tbody>
    </table>
    
   
    
    <button onClick={getjoke}> call </button>
    </div>

)

}

export default Demoaxios;
