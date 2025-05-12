import { useState } from "react";

function Contact(){

     let {text , changeText} = useState(`Hello`);
     
    return (
    <div>
      <h1>Contact</h1>
        <button onClick={
            ()=> changeText(`hi`)
            }>CLICK</button>
        <br/>
        <label>{text}</label>
    </div>
  )
}
export default Contact;