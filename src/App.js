import React,{useState} from 'react'
// import Gaurav from './component/Gaurav'
import './App.css'
import Navbar from './component/Navbar'
import TextForm from './component/TextForm'
import Alert from './component/Alert'
// import { Router } from 'react-router-dom'
// import About from './component/About'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";




const App = () => {
  const [mode, setMode] = useState('dark');
  const [rang, setrang] = useState('Dark Mode')
  const [kala, setkala] = useState('white')
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>
    {
      setalert(null)
    }, 1500)
   
  }
  const togglemode=()=>{
    if(mode==='light' || kala==='light'){
      setMode('dark')
      setrang('Dark Mode')
      setkala('white')
      document.body.style.backgroundColor='#0b4074'
      showalert("Dark Mode Enabled","success")
      document.title="TextUtils-Dark Mode"
    }
    else{
      setMode('light')
      setrang('Light Mode')
      setkala('black')
      document.body.style.backgroundColor='#dfe5ea'
      showalert("Light Mode Enabled","success")
document.title="TextUtils-Dark Mode"
    }
  }
  return (
    
   
      <>
 
    
<Navbar title="TextUtils" mode={mode} togglemode={togglemode} rang={rang} kala={kala}/>



<Alert alert={alert}/>
{/* <Router> */}
<div className="container my-3">
{/* <Switch>
          <Route exact path="/About">
            <About />
          </Route>
      
          <Route exact path="/"> */}
          <TextForm showalert={showalert} heading="Enter the text to analyz" mode={mode}/>
          {/* </Route>
        </Switch> */}


</div>
{/* </Router> */}
    </>
   )
  }

export default App
