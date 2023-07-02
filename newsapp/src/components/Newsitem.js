import React from 'react'

const Newsitem = (props) => {
    let { title, description, imageurl, newsurl, author, date, source } = props;
    return (
        <div>
            <div className="card" style={{ width: "18rem", boxShadow: "10px 10px 5px #aaaaaa" }}>
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", fontWeight: "600", fontSize: "17px", left: "82%" }}>
                    {source}

                </span>
                <div className="card-body">
                    <img src={imageurl} className="card-img-top" alt="..." style={{ height: "5cm", width: "100%" }} />
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text" ><small className="text" style={{ color: "green", fontWeight: "500" }}>by {author} on {new Date(date).toDateString()} .</small></p>
                    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-md btn-primary">Read more</a>
                    
                </div>
            </div>
        </div>
    )

}
export default Newsitem;