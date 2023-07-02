import React, { useEffect, useState } from 'react'
import background from "./weatherimage.jfif"

export default function Weather_details() {

    const [city, setcityname] = useState("delhi")

    const [Data, setData] =
        useState({
            feelslike_c: "",
            humidity: "",
            temp_c: "",
            uv: "",
            wind_degree: "",
            wind_dir: "",
            wind_kph: "",
            localtime: "",
            icon: "",
            cloud: ""
        });

    const onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById("search").value;
        if (name !== "") {
            setcityname(name);
            document.getElementById("search").value = "";
        }
    }

    const Weatherdata = () => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=055be98bbfb24149b1f75552221412&q=${city}&aqi=no`)
            .then((response) => response.json())
            .then((data) => setData({
                feelslike_c: data.current.feelslike_c,
                humidity: data.current.humidity,
                temp_c: data.current.temp_c,
                uv: data.current.uv,
                wind_degree: data.current.wind_degree,
                wind_dir: data.current.wind_dir,
                wind_kph: data.current.wind_kph,
                localtime: data.location.localtime,
                icon: data.current.condition.icon,
                cloud: data.current.cloud
                /* .then((data) => console.log(data)) */

            }))

    }

    useEffect(() => {
        Weatherdata();
        // eslint-disable-next-line
    }, [city]);


    const capital = (word1) => {
        return word1.toUpperCase();
    }

    const formatAMPM = (date) => {
        /* let fullyear = date.getFullYear();
        let month = date.getMonth()+1;
        let Date = date.getDate(); */
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes.toString().padStart(2, '0');
        let strTime = /* Date+"/"+month+"/"+fullyear+" "+ */hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }


    return (
        <>
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" style={{ color: "#1be6fa", fontSize: "30px", fontWeight: "bold" }}>Weather</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">


                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="text" placeholder="Search" id="search" style={{ fontWeight: "400", fontSize: "15px" }} />
                                <button className="btn btn-primary" type="submit" onClick={onsubmit} style={{ fontWeight: "400", fontSize: "15px" }}>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            <div>

                <div className="container pt-5 pb-3 h-100" style={{marginTop:'70px'}}>

                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4">

                            <div className="card" style={{ color: "#4B515", borderRadius: "35px",backgroundImage:`url(${background})`}}>
                                <div className="card-body p-4">

                                    <div className="d-flex" style={{ borderBottom: "2px solid white", fontWeight: "bold", color: "white" }} >
                                        <h4 className="flex-grow-1">{capital(city)}</h4>
                                        <h4>Today<br></br><span>{formatAMPM(new Date(Data.localtime))}</span></h4>
                                    </div>

                                    <div className="d-flex flex-column text-center mt-5 mb-4">
                                        <h6 className="display-4 mb-0 font-weight-bold" style={{ color: "white", fontWeight: "400" }}>{Data.temp_c} °C </h6>

                                    </div>

                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                                            <div><i className="fa-solid fa-wind" style={{ color: "#90949c" }}></i> <span className="ms-1" style={{ color: "white", fontWeight: "bold" }}>{Data.wind_kph}km/h
                                            </span></div>
                                            <div><i className="fa-solid fa-droplet" style={{ color: "#90949c" }}></i> <span className="ms-1" style={{ color: "white", fontWeight: "bold" }}>{Data.humidity}%</span>
                                            </div>
                                            <div><i className="fa-solid fa-cloud" style={{ color: "#90949c" }}></i> <span className="ms-1" style={{ color: "white", fontWeight: "bold" }}>{Data.cloud}%</span>
                                            </div>

                                        </div>
                                        <div>
                                            <img src={Data.icon}
                                                width="100px" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container' >
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item" >
                            <h2 className="accordion-header" id="headingOne" >
                                <button style={{ fontSize: "25px", fontWeight: "500",}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Weather details for - {capital(city)}
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={{backgroundImage:`url(${background})`}}>
                                    <div className='container'>
                                        <div className='row text-center'>
                                            <div className='col-6 col-md-4 col-lg-3 my-2'><span style={{ fontWeight: '500', color: "#90949c" }}>Feels like</span><h2 style={{color:"white"}}> {Data.feelslike_c} °C </h2></div>
                                            <div className='col-6 col-md-4 col-lg-3 my-2'><span style={{ fontWeight: '500', color: "#90949c" }}>Humidity</span><h2 style={{color:"white"}}> {Data.humidity}% </h2></div>
                                            <div className='col-6 col-md-4 col-lg-3 my-2'><span style={{ fontWeight: '500', color: "#90949c" }}>UV</span><h2 style={{color:"white"}}>  {Data.uv} </h2></div>
                                            <div className='col-6 col-md-4 col-lg-3 my-2'><span style={{ fontWeight: '500', color: "#90949c" }}>Wind Degree</span><h2 style={{color:"white"}}>  {Data.wind_degree}  </h2></div>
                                            <div className='col-6 col-md-4 col-lg-3 my-2'><span style={{ fontWeight: '500', color: "#90949c" }}>Wind Direction</span><h2 style={{color:"white"}}>  {Data.wind_dir}  </h2></div>
                                            <div className='col-6 col-md-4 col-lg-3 my-2'><span style={{ fontWeight: '500', color: "#90949c" }}>Wind</span><h2 style={{color:"white"}}>  {Data.wind_kph} km/h </h2></div>
                                            <div className='col-6 col-md-4 col-lg-3 my-2'><span style={{ fontWeight: '500', color: "#90949c" }}>Cloud Cover</span><h2 style={{color:"white"}}>  {Data.cloud} % </h2></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


/* {feelslike_c: data.current.feelslike_c,
    humidity: data.current.humidity, 
    temp_c: data.current.temp_c ,
    uv:data.current.uv,
    wind_degree:data.current.wind_degree,
    wind_dir:data.current.wind_dir,
    wind_kph:data.current.wind_kph ,
    localtime:data.location.localtime,
    icon:current.condition.icon} */








