import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav(props) {

    return (
        <nav className={`navbar fixed-top navbar-expand-lg bg-${props.mode}`} style={{ color: props.mode === "light" ? "black" : "white" }} >
            <div className="container-fluid">
                <Link to="/" className="nav-link active n1" style={{ fontWeight: "bold", fontSize: "25px", color: "#37b6b4" }}>TextUtils</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item" >
                            <Link className="nav-link active n2" style={{ color: props.mode === "light" ? "black" : "white",fontWeight:"600" }} aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active n3" style={{ color: props.mode === "light" ? "black" : "white",fontWeight:"600" }} to="/about">{props.about}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active n4" style={{ color: props.mode === "light" ? "black" : "white",fontWeight:"600" }} to="/contact">Contact us</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch mx-2">
                        <input className="form-check-input" type="checkbox" onClick={props.dmodef} role="switch" id="flexSwitchCheckDefault" />
                        <label className={`nav-link active`} style={{ color: props.mode === "light" ? "black" : "white",fontWeight:"600" }} htmlFor="flexSwitchCheckDefault">{props.mode} mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

