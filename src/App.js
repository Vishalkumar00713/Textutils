
import './App.css';
import Navbar from "./components/Navbar";
import Textform from './components/Textform';
import About from "./components/About";
import React, {useState} from "react"
import Alert from "./components/Alert"
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);


  function showAlert(message,type)
  {
    
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{


      setAlert(null);

    },2000);


  }

  function toggelMode(){
   if(mode==="dark")
    {
    setMode('light');
    document.body.style.backgroundColor="White";
    showAlert("Light mode has been enabeld","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor="black";
      showAlert("Dark mode has been enabeld","success");
    }
  }
  return (
<>
{/* <BrowserRouter> */}
<Navbar titel="Textutils" aboutText="About" mode={mode}  toggelMode={toggelMode}/>
<Alert alert={alert}/>
<div className="container my-3">
      
{/* <Routes>
        <Route path="/" element={<Textform  alert={showAlert} heading="Enter the text to analyise" mode={mode}/>}>
        </Route>
          <Route path="about" element={ <About/>} />
          
       
</Routes> */}


<Textform  alert={showAlert} heading="Enter the text to analyise" mode={mode}/>
{/* <About/> */}
</div>
{/* </BrowserRouter> */}




</>
  );
}

export default App;
