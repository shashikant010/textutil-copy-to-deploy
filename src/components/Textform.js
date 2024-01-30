import React,{useState} from 'react'

export default function Textform(prop) {
    const [text,setText]=useState('Enter the text');
    const ontextchange=(event)=>{
        setText(event.target.value)

    }
    const onupbtnclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        prop.alert('text converted to uppercase','success');
        
      }
      const ondownbtnclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        prop.alert('text converted to lowercase','success');
        
      }
      const ontextclick=()=>{
        if(text==="Enter the text") setText("");
      }
      
      const handlecopy=()=>{
        let text=document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
        prop.alert('text is copied','success');
      }
      const handleExtraspaces=()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))  
        prop.alert('extra spaces are removed','success');
    } 
    
  return (
    <div style={
    prop.style
    }>
      < >
    <h1>{prop.heading}</h1>
  <div className="mb-3" style={
      prop.style
    }>

    <textarea
    style={
   prop.style
     }
      className="form-control"
      value={text}
        onChange={ontextchange}
        onClick={ontextclick}
      id="exampleFormControlTextarea1"
      rows={8}
      
    />
  </div>
  <button className="btn btn-primary mx-3 my-2 "onClick={onupbtnclick}>convert to uppercase</button>
  <button className="btn btn-secondary mx-2 "onClick={ondownbtnclick}>convert to Lowercase</button>
  <button className="btn btn-primary mx-3 my-2 "onClick={handlecopy}>copy text</button>
  <button className="btn btn-secondary mx-2 "onClick={handleExtraspaces}>remove extra spaces</button>

  <div style={
     prop.style
    }>
    <h1>Your text summary</h1>
    <p>your text contain {text.length} characters and {text.split(" ").length} words</p>
    <p>It can be read in {text.split(" ").length*0.008} minutes</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
</>

    </div>
    
  )
}
