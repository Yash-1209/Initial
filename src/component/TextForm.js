import React, {useState} from 'react'
export default function TextForm(props)

{
  const handleUpClick=()=>{
    // console.log("button was Clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showalert("Converted Upper Case","success")
  }
  const handleLoClick=()=>{
    // console.log("button was Clicked")
    let newText = text.toLowerCase();
    setText(newText)
    props.showalert("Converted Lower Case","success")

  }
  const handleOnChange=(event)=>{
    // console.log("Changed")
    setText(event.target.value)

  }
    const [text , setText] = useState('');
  return (
    <>
    <div>
     <h1  style={{color:props.kala}}>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To UpperCase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert To LowerCase</button>
    </div>
    <div className="container my-4">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      {/* <p>{0.008*text.split("").length} to Read the words </p> */}
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
