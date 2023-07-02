import React from 'react';
import Navbar1 from './components1/Navbar1';
import News1 from './components1/News1';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './components1/Page404.js';
import About1 from './components1/About1';


class App1 extends React.Component {


  constructor() {
    super();
    this.state = {
      mode: "light",
    }
  }

  

  state = {
    progress: 0
  }
  setprogress = (progress) => {
    this.setState({ progress: progress })
  }

  dmodef = () => {
    if (this.state.mode === "light") {

      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "rgb(93 90 90)";

    }
    else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
    }

  }
  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            height='3.5px'
            progress={this.state.progress} />
          <Navbar1 mode={this.state.mode} dmodef={this.dmodef} />
          <Routes>
            <Route path="/" element={<News1 mode={this.state.mode} key="sports" category="sports" setprogress={this.setprogress} />} />
            <Route path="/business" element={<News1 mode={this.state.mode} key="business" category="business" setprogress={this.setprogress} />} />
            <Route path="/entertainment" element={<News1 mode={this.state.mode} key="entertainment" category="entertainment" setprogress={this.setprogress} />} />
            <Route path="/general" element={<News1 mode={this.state.mode} key="general" category="general" setprogress={this.setprogress} />} />
            <Route path="/health" element={<News1 mode={this.state.mode} key="health" category="health" setprogress={this.setprogress} />} />
            <Route path="/science" element={<News1 mode={this.state.mode} key="science" category="science" setprogress={this.setprogress} />} />
            <Route path="/sports" element={<News1 mode={this.state.mode} key="sports" category="sports" setprogress={this.setprogress} />} />
            <Route path="/technology" element={<News1 mode={this.state.mode} key="technology" category="technology" setprogress={this.setprogress} />} />
            <Route path="/about" element={<About1 mode={this.state.mode} />} />
            <Route path="/*" element={<Page404 mode={this.state.mode} />} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App1;





