// import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState("null");
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
            setAlert(null);
      }, 3000)
  }
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "rgb(3 37 71)"
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode"
      // setInterval(()=>{
      //   document.title = "TextUtils is amazing mode"
      // }, 2000)
      // setInterval(()=>{
      //   document.title = "Install TextUtils now"
      // }, 1000)
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode"

    }
  }
  return (
  <>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
{/* <Navbar/> */}
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-4">
 <Switch>
{/* //  /user --> Component 1
//  /user/home --> Component 2 */}
  <Route exact path="/about"> 
      <About mode={mode} />
    </Route>
    <Route exact path="/">
    <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extre spaces!" mode={mode}/>
    </Route>
    </Switch> 
{/* <About mode={mode}/>  */}
</div>
  </Router> 
  </>
  );
}

export default App;
