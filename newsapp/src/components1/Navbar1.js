import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props)=> {

   
 
        return (
            <div>
                <nav className={`navbar navbar-expand-lg fixed-top bg-${props.mode}`}>
                    <div className="container-fluid">
                        <Link  className="navbar-brand " to="/" style={{ fontWeight: "bold", fontSize: "30px", color: "#37b6b4" }}>My News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active " aria-current="page" to="/" style={{fontWeight:"600",fontSize:"18px",color:props.mode === "light"?"black":"white"}}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={{fontWeight:"600",fontSize:"18px",color:props.mode === "light"?"black":"white"}} to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={{fontWeight:"600",fontSize:"18px",color:props.mode === "light"?"black":"white"}} to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={{fontWeight:"600",fontSize:"18px",color:props.mode === "light"?"black":"white"}} to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={{fontWeight:"600",fontSize:"18px",color:props.mode === "light"?"black":"white"}} to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={{fontWeight:"600",fontSize:"18px",color:props.mode === "light"?"black":"white"}} to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={{fontWeight:"600",fontSize:"18px",color:props.mode === "light"?"black":"white"}} to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={{fontWeight:"600",fontSize:"18px",color:props.mode === "light"?"black":"white"}} to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={{fontWeight:"600",fontSize:"18px",color:props.mode === "light"?"black":"white"}} to="/about">About Us</Link>
                                </li>
                                
                            </ul>
                            <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox"  role="switch" id="flexSwitchCheckDefault" onClick={props.dmodef}/>
                        <label className="nav-link active" htmlFor="flexSwitchCheckDefault" style={{color:props.mode === "light"?"black":"white"}}>{props.mode} mode</label>
                    </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }


export default Navbar;