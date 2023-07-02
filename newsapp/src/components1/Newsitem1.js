import React from 'react';
import "./Newsitem1.css"

class Newsitem1 extends React.Component {

    render() {

        const { title, description, imageurl, newsurl, source ,author} = this.props;

        const titlel = title.length;
        const desl = description.length;
        
        return (
            <>

                <div className="card" >
                  <div style={{display:"flex",justifyContent:"end",position:"absolute",right:"0%"}}>
                  <span className=" badge rounded-pill" style={{backgroundColor:"#269f79"}}>
                       {source}
            
                    </span>
                  </div>
                    <img src={imageurl} className="card-img-top newsimg" alt="Img Not Found" />
                    <div className="card-body" style={{backgroundColor:this.props.mode==="light"?"white":"black"}}>
                    
                        <h5 className="card-title" style={{color:this.props.mode === "light"?"black":"white"}}>{titlel<=80?title:title.slice(0,80)+"..."}</h5>
                        <p className="card-text" style={{color:this.props.mode === "light"?"black":"white"}}>{desl<=110?description:description.slice(0,110)+"..."}</p>
                        <p className="card-text"><small className="text-success" style={{fontWeight:"bold"}}>By {author}</small></p>
                        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{fontWeight:"500"}}>Read more</a>
                    </div>
                </div>

            </>
        )
    }
}
export default Newsitem1;