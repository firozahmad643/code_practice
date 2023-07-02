import React, {useMemo,useState } from "react";


function Hook(){
     
    const [count,setcount] = useState(0);
    const [item,setitem] = useState(1);
    
    function upcount(){
        console.log("hello");
       return count
    }
    const d = useMemo( () => upcount()
        ,[count])

    
    
    return(
        <div className="text-white text-center">
           <h1>count:{count}</h1>
           <h1>{d}</h1>
           <h1>item:{item}</h1>
           <button type="button" onClick={() => setcount(count  + 1)}>update count</button>
           <button type="button" onClick={() => setitem(item  * 2)}>update item</button>
          
        </div>
    )
}

export default Hook;