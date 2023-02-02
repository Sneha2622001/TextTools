import React , {useState} from 'react'
//import PropTypes from 'prop-types'


//rfc
export default function TextForm(props) {

  let [text , setText] = useState("");

  let handleUpClick = () =>{
    // console.log("uppercase button is clicked" + text)
     let newText = text.toUpperCase()
     setText(newText);
     props.showAlert("Converted to Uppercase!" , "success")
  }
 

  let handleLoClick = () =>{
    // console.log("uppercase button is clicked" + text)
    //  let newText = text.toLowerCase()
    //  setText(newText);
     setText(text.toLowerCase())
     props.showAlert("Converted to Lowercase!" , "success")
  }

  let handleclearClick = () =>{
     let newText ='';
     setText(newText);
     props.showAlert("Cleared!" , "success")
  }

  let handlereverseClick = () =>{
  let newText = text.split(" ")
  .map(word => word.split("").reverse().join(""));
  setText(newText.join(" "));
  props.showAlert("Reversed the Words!" , "success")
}


let handlecopyClick = () =>{
  let newText = document.getElementById("mytext");
  newText.select();
  navigator.clipboard.writeText(newText.value);
  props.showAlert("Text Copied!" , "success")
}


let handleexspClick = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra Space Removed!" , "success")
}

// we can type ....
  let handleUpOnchange = (event) =>{
    //console.log("uppercase button is onchanged")
    setText(event.target.value)
 }

  

  return(
    <>
    <div>
       <div className="container mb-3" style={{color: props.mode =='light' ?  'rgb(62, 61, 61)':'white'}}>
         <label htmlFor="text" className="form-label my-3"><h3>{props.heading}</h3></label>
         <textarea className="form-control" value = {text} onChange={handleUpOnchange} style={{backgroundColor: props.mode =='light' ? 'white' : 'rgb(62, 61, 61)' , color: props.mode =='light' ?  'rgb(62, 61, 61)':'white'}} id="mytext" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleexspClick}>Remove Extraspace</button>
      <button className="btn btn-primary mx-2" onClick={handlereverseClick}>Reverse words</button>
      <button className="btn btn-primary mx-2" onClick={handlecopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear btn</button>
      
  </div>
  <div className="container"  style={{color: props.mode =='light' ?  'rgb(62, 61, 61)':'white'}}>
    <h1>Number of texts</h1>
    <p>{ text.split(' ').length} words and {text.length} characters</p>
    <p>{0.008 * text.split(' ').length} minutes take to read</p>
    <h2>Pre-View</h2>
    <p><b>{text.length > 0 ? text :"Enter something in the textbox above to preview it here *"}</b></p>

  </div>
  </>
  )  
}
