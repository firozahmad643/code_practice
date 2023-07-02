import React from 'react'
import {Link} from "react-router-dom";

 const  Page404 = (props) => {
 
    return (
      <div className='container my-5 text-center' style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>404 Page Not Found</h1>
        <p>Go to <Link to="/">Home page</Link></p>
      </div>
    )
 
}

export default Page404;
