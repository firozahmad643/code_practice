import React from 'react'
import {Link} from "react-router-dom";

 const  Page404 = () => {
 
    return (
      <div className='container my-5 text-center'>
        <h1>404 page not found</h1>
        <p>Go to <Link to="/">Home page</Link></p>
      </div>
    )
 
}

export default Page404;
