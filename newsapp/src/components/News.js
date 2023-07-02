import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {

    const capital = (word) => {

        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    const [article, setarticle] = useState([]);
    const [page, setpage] = useState(1);
    const [loading, setloading] = useState(false);
    const [totalResults, settotalResults] = useState(0);

    //document.title = this.capital(this.props.category) + " -  My News";

    const updatenews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b41d6c5de3144626a1b5c811c81776c0&page=${page}&pagesize=${props.newspages}`;
        props.setprogress(10);
        setloading(true);
        props.setprogress(30);
        let data = await fetch(url);
        props.setprogress(50);
        let parseddata = await data.json();
        props.setprogress(70);

        setarticle(parseddata.articles);
        settotalResults(parseddata.totalResults);
        setloading(false);
        props.setprogress(100);
    }

    useEffect(() => {
        updatenews();
    }, []);


    const handlenextclick = async () => {
        if (page + 1 > Math.ceil(totalResults / props.newspages)) {
        }
        else {
            setpage(page + 1);
            updatenews();
        }
    }

    const handleprevclick = async () => {
        setpage(page - 1);
        updatenews();
    }

    return (
        <div className='container-fluid my-3'>

            <h1 className='text-center' style={{ margin: "70px 0px 20px 0px " }}>Top {capital(props.category)} Headlines</h1>
            {loading && <Spinner />}

            <div className="row" >
                {!loading && article.map((element) => {
                    return <div className="col-xl-3 col-lg-4 col-sm-6 mt-3" key={element.url}>
                        <Newsitem title={element.title ? element.title.slice(0, 88) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage ? element.urlToImage : "https://www.sciencealert.com/images/2022/11/ISpaceLanderInFalcon9Fairing.jpg"} newsurl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}

            </div>
            {!loading && <div className="cntainer d-flex justify-content-between mt-3 mb-5">
                <button type="button" onClick={handleprevclick} disabled={page <= 1} className="btn btn-sm btn-dark" style={{ fontSize: "20px" }}> &larr;Previous</button>
                <button type="button" onClick={handlenextclick} disabled={page + 1 > Math.ceil(totalResults / props.newspages)} className="btn btn-sm btn-dark" style={{ fontSize: "20px" }}>Next &rarr;</button>
            </div>}
        </div>
    )

}


News.defaultProps =
{
    newspages: 8,
    country: "in",
    category: "technology"
}

News.prpoTypes =
{
    newspages: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}
export default News;