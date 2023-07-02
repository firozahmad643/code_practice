import React, { useState } from 'react'
export default function Textarea(props) {


  const upcase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert(" Converted to Upper case", "success");
  };

  const Lowcase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert(" Converted to Lower case", "success");
  };

  const copytoclipboard = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Copied to clipboard", "success");
  }

  const remtext = () => {

    settext("");
    props.showalert(" Text has been removed", "success")
  };

  const onch = (event) => {
    settext(event.target.value);
  };

  const [text, settext] = useState("");
  var numofwords = text.split(/\s+/).filter((element) => { return element.length !== 0 });

  const numofchar = text.length;


  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>Enter the text below and Click any button</h1>
        <textarea className="form-control" value={text} style={{ margin: "10px 0px", backgroundColor: props.mode === "light" ? "white" : "rgb(23 18 18", color: props.mode === "light" ? "black" : "white" }} onChange={onch} id="exampleFormControlTextarea1" rows="5"></textarea>
        <button type="button" className={`btn btn-${props.mode === "light" ? "primary" : "dark"} my-2 mx-2 `} onClick={upcase}>Upper Case</button>
        <button type="button" className={`btn btn-${props.mode === "light" ? "primary" : "dark"} my-2 mx-2`} onClick={Lowcase}>Lower Case</button>
        <button type="button" className={`btn btn-${props.mode === "light" ? "primary" : "dark"} my-2 mx-2`} onClick={copytoclipboard}>Copy to clipboard</button>
        <button type="button" className={`btn btn-${props.mode === "light" ? "primary" : "dark"} my-2 mx-2 `} onClick={remtext}>Remove Text</button>
      </div>


      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>

        <h1>Your text summary</h1>
        {/* <p>Number of words: {text.split(" ").length}<br />Number of character: {text.length}</p> */}
        <p>Number of words: {numofwords.length}<br />Number of character: {numofchar > 0 ? text.length : "  Enter something in textbox"}</p>
        <h1>Preview</h1>
        <p style={{ border: "1px solid #d0b3b3", wordWrap: "break-word", minHeight: "2.5cm", padding: "10px", backgroundColor: props.mode === "light" ? "white" : "rgb(23 18 18", color: props.mode === "light" ? "black" : "white" }}>{text}</p>
      </div>

    </>
  )
}
