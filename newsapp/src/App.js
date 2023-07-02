import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './components/Page404';
import LoadingBar from "react-top-loading-bar";

 const  App =() => {
  
  const newspages = 20;
  const country = "us";

  const[progress,setprogress] = useState(0);

  
  
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height='3.5px'
        progress={progress}
        
      />
          <Navbar />
          <Routes>
            <Route  exact path="/" element={<News setprogress={setprogress}key="sports"  newspages={newspages} country={country} category="sports" />} />
            <Route  exact path="/business" element={<News setprogress={setprogress}key="business"   newspages={newspages} country={country} category="business" />} />
            <Route  exact path="/entertainment" element={<News setprogress={setprogress}key="entertainment"   newspages={newspages} country={country} category="entertainment" />} />
            <Route  exact path="/general" element={<News setprogress={setprogress}key="general"  newspages={newspages} country={country} category="general" />} />
            <Route  exact path="/health" element={<News setprogress={setprogress}key="health"  newspages={newspages} country={country} category="health" />} />
            <Route  exact path="/science" element={<News setprogress={setprogress}key="science"  newspages={newspages} country={country} category="science" />} />
            <Route  exact path="/sports" element={<News setprogress={setprogress}key="sports"  newspages={newspages} country={country} category="sports" />} />
            <Route  exact path="/technology" element={<News setprogress={setprogress}key="technology"  newspages={newspages} country={country} category="technology" />} />
            <Route path="/*" element={<Page404 />}/>
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;






