
import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {
  const[value, setValue]= useState("");

  const getValue=(e)=>{
    setValue(e);
  }
  console.log(value);
  

  return (
    <div className={value === true ? " Dark" : " White" } >

      <Navbar function3={getValue} />
      <Body Bg_state={value} />
    </div>
  );
}

export default App;
