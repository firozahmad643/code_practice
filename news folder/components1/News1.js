import Newsitem1 from "./Newsitem1";
import React from "react";
import Spinner1 from "./Spinner1";
class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            loading:false
        }
    }
   
    capital = (word) => word.charAt(0).toUpperCase() + word.slice(1);


    async componentDidMount() {
        this.props.setprogress(15);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=07b30b49766643c3b0b8a3673af87f7d&page=${this.state.page}&pagesize=${this.props.newspages}&category=${this.props.category}`;
        this.setState({loading:true})
        this.props.setprogress(30);
        let data = await fetch(url);
        this.props.setprogress(50);
        let parseddata = await data.json();
        this.props.setprogress(80);
        this.setState({
            articles: parseddata.articles,
            totalResults: parseddata.totalResults
        })
        this.props.setprogress(100);
        this.setState({loading:false})
       
        document.title =  "My News - " + this.capital(this.props.category);
        
    }

   

    handleclicknext = async() =>{
        if(this.state.page<Math.ceil(this.state.totalResults/this.props.newspages)){ 
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=07b30b49766643c3b0b8a3673af87f7d&page=${this.state.page + 1}&pagesize=${this.props.newspages}&category=${this.props.category}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parseddata = await data.json();
           
            this.setState({
                articles: parseddata.articles,
               page : this.state.page + 1
            })
            this.setState({loading:false})
        }
       
    }

     

    handleclickprev = async() =>{  
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=07b30b49766643c3b0b8a3673af87f7d&page=${this.state.page - 1}&pagesize=${this.props.newspages}&category=${this.props.category}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            articles: parseddata.articles,
            page:this.state.page - 1
        })
        this.setState({loading:false})
    }

render() {
    return (
        <div className="container my-3">
            <h1 className="text-center" style={{margin:"80px 0px 20px",color:this.props.mode === "light"?"black":"white"}}>Top {this.capital(this.props.category)} - Headlines</h1>
            {this.state.loading && <Spinner1 />}
            <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-xl-3 col-lg-4 col-sm-6 my-2" key={element.url}><Newsitem1 mode={this.props.mode} title={element.title ? element.title : "title"} description={element.description ? element.description : "description"} imageurl={element.urlToImage ? element.urlToImage : "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/xbqk3ztzzc8qu1sv_1670059150.jpeg"} newsurl={element.url} source={element.source.name} author={element.author} publishedAt={element.publishedAt}/></div>
                })}
            </div>
            {!this.state.loading && <div className="cntainer d-flex justify-content-between my-3">
                <button onClick={this.handleclickprev} type="button" disabled={this.state.page <= 1} className={`btn btn-${this.props.mode === "light"?"dark":"primary"}`} style={{ fontWeight:"600"}}>&larr;Previos</button>
                <button onClick={this.handleclicknext} type="button" disabled={this.state.page>=Math.ceil(this.state.totalResults / this.props.newspages)} className={`btn btn-${this.props.mode === "light"?"dark":"primary"}`} style={{ fontWeight:"600"}}>Next&rarr;</button>
            </div>}
        </div>
    )
}
}

export default News;