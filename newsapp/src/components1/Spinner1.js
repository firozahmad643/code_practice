import React from "react";
import loading from './loading1.svg';

class Spinner1 extends React.Component{
    render(){
        return(
             <div className="text-center my-2">
                <img src={loading} alt="loadingImage"></img>
             </div>
        )
    }
}

export default Spinner1;