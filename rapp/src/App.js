import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './component/first_project/Nav.js';
import Textarea from './component/first_project/Textarea.js';
import Alert from './component/first_project/Alert.js';
import About from './component/first_project/About.js';
import Contact from './component/first_project/Contact.js';
import Page404 from './component/first_project/Page404.js';


export default function App() {

  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message) => {

    setalert(message);

    setTimeout(() => { setalert(null) }, 1500);
  }

  const [btncolor, setbtncolor] = useState("light");

  const dmodef = () =>                
  {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(93 90 90)";
      showalert("Dark mode has been enabled");
      setbtncolor("dark");
      document.title = "TextUtils-Dark mode";


    }
    else {
      setmode("light"); document.body.style.backgroundColor = "white";
      showalert(" Light mode has been enabled");
      setbtncolor("light");
      document.title = "TextUtils";

    }

  }

  return (
    <>
<Router>  

        <Nav about="About us" mode={mode} dmodef={dmodef} />
        <Alert alert={alert} mode={mode}/>
        <Routes>    
        <Route path="/" element={ <div className="container my-4"><Textarea mode={mode} showalert={showalert} btncolor={btncolor}/> </div>}/>
        <Route path="/about" element={<About mode={mode}/>}/>
        <Route path="/contact" element={<Contact mode={mode}/>}/>
        <Route path="/*" element={<Page404 mode={mode}/>}/>
        </Routes>
        </Router>
  
        
    </>
  );
}


