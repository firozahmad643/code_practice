import React from 'react'
import "./Contact.css"

export default function Contact(props) {
    return (

        <div>
            <div className='contact' style={{ color: props.mode === "light" ? "black" : "white" }}>Contact</div>
            <div className='innerdiv' style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "black", borderColor: props.mode === "light" ? "black" : "white" }}>
                <div className='div1' style={{ borderColor: props.mode === "light" ? "black" : "white" }}>Developed by :- FIROZ AHMAD
                </div>
                <div className='div2' style={{ borderColor: props.mode === "light" ? "black" : "white" }}>Email Address :- af872953@gmail.com
                </div>
                <div className='div3'>Phone No :- 999903xxxx
                </div>
            </div>
        </div>

    )
}
