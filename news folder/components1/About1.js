import React from 'react';
import "./About1.css";

export default function About(props) {

    return (
        <div style={{margin:"90px 0px"}}>
            <div className='about' style={{ color: props.mode === "light" ? "black" : "white" }}>About Us</div>
            <div className='innerdiv' style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "black", borderColor: props.mode === "light" ? "black" : "white" }}>
                <div className='innerdiv1' style={{ borderColor: props.mode === "light" ? "black" : "white" }}>News App</div>
                <div className='innerdiv2'>It is  a News App. This app can be used to get daily live news based on diffrent categories such as sports, science, technology, entertainment, health etc .This app has both light and dark mode.
                This news app get news data by using async await method from News Api. This app is created using React.Js, React router,Rreact top loading bar, spinner, hook, class and function based components.
                </div>
            </div>
        </div>
    )
}
