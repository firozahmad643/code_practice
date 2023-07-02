import React from 'react';
import loading from "./loading.svg"
const Spinner = () => {
    
        return (
            <div>
                <div className="text-center">
                    <img src={loading} alt="loading"></img>
                </div>
            </div>
        )
   
}
export default Spinner;