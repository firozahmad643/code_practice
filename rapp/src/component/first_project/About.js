import React from 'react';
import "./About.css";

export default function About(props) {

    return (
        <div>
            <div className='about' style={{ color: props.mode === "light" ? "black" : "white" }}>About Us</div>
            <div className='innerdiv' style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "black", borderColor: props.mode === "light" ? "black" : "white" }}>
                <div className='innerdiv1' style={{ borderColor: props.mode === "light" ? "black" : "white" }}>Textutils App</div>
                <div className='innerdiv2'>It is  TextUtils App. This app can be used to manipulate the text according to the need of user such as Converting the text to Upper Case ,Converting the text to Lower Case , Copy text and Remove text.
                    This app has both light and dark bode. This app is created using React.Js, React router and hook.
                </div>
            </div>
        </div>
    )
}
