import React from 'react'
import "./Clock.css"
import { useState } from 'react'

export default function Clock() {
    const [times] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 ])
    const [data] = useState([{
            id:'1001',
            title:"create Wireframe",
            img:"/",
            start:2,
            end:10
    },
    {
        id:'1002',
        title:"Sajjad Manghal",
        img:"/",
        start:8,
        end:17

}]);


console.log(times)
  return (
    <div className=''>
        <table style={{textAlign:"left",overflow:"hidden"}} >
            <thead>
            <tr>
            {times.map(i=> <th>{i < 12 ? `${i + "A.M"}` : `${i + "P.M"}`}</th>)}
            </tr>
            </thead>
            <tbody>
                
                {data.map(i=>{
             return <tr>
                    
 { times.slice(0,23-i.start).map(x=>
    <td colSpan={ x === i.start && i.end - i.start} style={{background: x === i.start && "blue" }} >
       {x === i.start && <div><img src={i.img} /> <span> {i.title}</span> </div> }
    </td>
)}
</tr>

                })}
              
           
            </tbody>
        </table>
          
        
    </div>
  )
}
