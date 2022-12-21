// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Test1 = () => {
//     const [data1, setData] = useState([])

//     useEffect(() => {
        
//             axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8').then((res) => {
//                 console.log(res)
//                 setData(res.data)
//             })
        
//     }, [])

//     return (
//         <div>Test1
//             {/* <h1>{data1.map((item)=>{return(item.city)})}</h1> */}
//             <table>
//                 <td>
//                     {data1.map((item)=> <tr>{item.city+" "+item.name}</tr>)}
//                 </td>
             
//             </table>
//             <h1>{data[0]}</h1>
//             <h1>hi</h1>
        
//         </div>
//     )
// }

// export default Test1