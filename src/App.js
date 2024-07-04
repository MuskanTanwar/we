
import './App.css';

import Navbar from './components/Navbar';
import TextForm1 from './components/TextForm1';
import Alert from './components/Alert';
// import Home from './components/Home';
import React,{useState} from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  
  const showAlertMsg=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }
  const[swtichText,setSwtichText]=useState('Enable Dark Mode');
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      setSwtichText('Enable Light Mode')
      document.body.style.backgroundColor="black";
      showAlertMsg("Dark Mode has been enabled ", "success");
    }
    else{
      setMode('light')
      setSwtichText('Enable Dark Mode')
      document.body.style.backgroundColor="white";
      showAlertMsg("Light Mode has been enabled" , "success");
    }
  }
  return (
    <>
        {/* <BrowserRouter>
        <Navbar title="Navbar" mode={mode} swtichText={swtichText} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
          <Route exact path="/Home" element={<TextForm1 showAlertMsg={showAlertMsg} title="Enter the text to analyse"  mode={mode}/>}/>
          <Route exact path="/"element= {<Home/>}/>
        </Routes>
        </div>
        </BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} swtichText={swtichText} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <TextForm1 showAlertMsg={showAlertMsg} title="Enter the text to analyse"  mode={mode}/>
        </div> 
   </>
  );
}

export default App;
