//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React , {useState} from 'react';

//copeid from react router dom website
import { BrowserRouter , Routes ,Route} from "react-router-dom";

function App() {
  let [mode , setMode] = useState('light') // state of color mode
  let[alert , setAlert] = useState(null)   //state of alert 

  let showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  let toggleMode = ()=>{
    if(mode == 'light'){
      setMode('dark')
      document.body.style.background = 'rgb(62, 61, 61)';
      showAlert("Darkmode has enabled" , "success");
      document.title = 'TextTool - Darkmode'
    }else{
      setMode('light')
      document.body.style.background = 'white';
      showAlert("Lightmode has enabled" , "success");
      document.title = 'TextTool - Lightmode'
    }
  }

  return (
    <>
   {/* <TextForm showAlert={showAlert} heading ="Enter the text to analyze"  mode = {mode}/> */}
      {/* <About /> */}
      <BrowserRouter>
    <Navbar title ="TextTool"  about = "About-Text" mode = {mode} toggleModes={toggleMode}/>
      <Alert alert={alert}/>
     <div className="container my-3">
      <Routes >
          <Route exact path="/about" element={ <About />}></Route>
           
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading ="Enter the text to analyze"  mode = {mode}/>}> </Route>

        </Routes>
    </div>
    </BrowserRouter>
  </>
  );
}

export default App;
