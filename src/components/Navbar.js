
import {useState} from 'react';
import './Navbar.css';


function BasicExample({function3}) {
  const[b_color, setB_color] = useState("");

  console.log(b_color)


  const theme = (e) =>{
    // console.log(e.target.checked)
    if(e.target.checked === true){
      setB_color(true)
    }else{
      setB_color(false)
    }
  }
  function3(b_color);




  return (
    <div className={b_color === true ? "navbar1 Dark" : "navbar1 White" } >
  
      <p className='text'>TextUtils</p>
      <p className='text'>Home</p>
      <div className='toggle'>
        <input type="checkbox" onChange={theme} />
        <label>Enable Dark Mode</label>
      </div>
    </div>
  );
}

export default BasicExample;