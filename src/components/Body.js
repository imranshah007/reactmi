import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';

const Body = () => {
  const preview2 = "Enter something in the textbox above to preview it here"
  const [wordcount, setWordCount] = useState(1);
  const [charcount, setCharCount] = useState(0);
  const [time, setTime] = useState(0);
  const [preview, setPreview] = useState("Enter something in the textbox above to preview it here")
  const [click, setClick] = useState(false);
  const textarea = useRef();



  const text = (e) => {
    setCharCount((e) => e + 1)
    setPreview(e.target.value)
  }
  
  const UpperCase = () => {
    // console.log("sai");
    let preview3 = preview.toUpperCase();
    setPreview(preview3)
    // console.log(preview3)
    setClick(true)
  }
  const LowerCase = () => {
    // console.log("sai");
    let preview3 = preview.toLowerCase();
    setPreview(preview3)
    // console.log(preview3)
    setClick(true)
  }
  const clear_text = () => {
    console.log(textarea)
    textarea.current = " ";
    textarea.value = " "
    // setPreview(" ");
    // console.log(preview);
    // setClick(false);
  }
  const remove_spaces = () => {
    const preview4 = preview.split("  ");
    setPreview(preview4);
    setClick(true)

  }
  const copy = _ => {
    console.log("copy");
    navigator.clipboard.writeText(preview);
    alert("Copied the text: " + preview);
  }

  const counting =(e)=>{
    if(e.code === "Space"){
      setWordCount((e)=>e+1)
      let readingTime = wordcount/60; 
      setTime(readingTime);
    }
  }



  return (
    <>
    <div className='bot'>

    <h3 className='heading'>Enter the text to analyze below</h3>
      <textarea className='textarea' ref={textarea} onKeyUp={counting} onChange={text} ></textarea>
      <div className='btn'>
        <button onClick={UpperCase}>Convert to Uppercase</button>

        <button onClick={LowerCase} >Convert to Lowercase</button>
        <button onClick={clear_text}>Clear Text</button>
        <button onClick={copy}>Copy Text</button>
        <button onClick={remove_spaces}>Remove Extra Spaces </button>
      </div>
      <div className='summary'>
      <h1>Your text summary</h1>
      <p>{wordcount} Words {charcount} charcters</p>
      <p>{time} Minutes to Read</p>
      </div>


      <div className='preview' >
        <h1>Preview</h1>
        <h4>{click === true ? preview : preview2}</h4>
      </div>

    </div>
     


    </>
  )
}

export default Body