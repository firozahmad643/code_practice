import React from 'react'
import {Link} from "react-router-dom";

 const  Page404 = (props) => {
 
    return (
      <div className='container text-center' style={{margin:"90px 0px",color: props.mode === "light" ? "black" : "white" }}>
        <h1 >404 page not found</h1>
        <p>Go to <Link to="/">Home page</Link></p>
      </div>
    )
 
}

export default Page404;
