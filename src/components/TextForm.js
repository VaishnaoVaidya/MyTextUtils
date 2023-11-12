import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success")
  }
  
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success")
  }
  
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = " "
    setText(newText)
    props.showAlert("Text Cleared!", "success")

  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);

  }

  const handleCopy = () => {
    // var text = document.getElementById("myBox")
    // text.select()
    navigator.clipboard.writeText(text)
    // navigator.clipboard.writeText(text.value)
    // document.getSelection().removeAllRanges()
    props.showAlert("Copied to Clickboard!", "success")

  }

  const handleExtraSpaces = ()=>{
      let newText = text.replace(/\s+/g, " ");
      setText(newText);
      props.showAlert("Converted to lowercase", "success")
      props.showAlert("Extra spaces removed!", "success")

  }
  

  const [text, setText] = useState("");
  // console.log(useState("Enter text here2"))
    // text = "new text"; //Wrong way to change the state
    // setText = "new text"; //Wrong way to change the state
  return (
  // <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
  <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>

        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(179 159 158)':'white',color:props.mode==='light'?'black':'black'}}
  id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  
    {/* <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}> */}
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview here!"}</p>
    </div>
    </div>
  )
}

