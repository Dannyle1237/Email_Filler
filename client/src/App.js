import React, {useState, useEffect} from 'react'
import "./App.css"
import InputBox from "./components/InputBox"
import TextArea from "./components/TextArea"
import ROTextArea from './components/ROTextArea'

function App() {
  const [temps, setTemps] = useState()
  const [fillers, setFillers] = useState()
  const [string, setString] = useState()
  const [after_string, setAfterString] = useState()

  function Change(){
    //API Request to Python Flask Backend
    fetch("/backend", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        string: string,
        temps: temps,
        fillers: fillers,
      }),
    }).then(
      res => res.json()
    ).then(
      string=> {
        setAfterString(string["string"])
        console.log(string)
      }
    )
    //console.log("changing");
  }
  // console.log(temps)
  // console.log(fillers)
  // console.log(string)

  return (
    <div id = "container">
      <header>Email from Template Creator</header>
      <div id="text">
        <div id="filler_boxes">  
          <InputBox
            id = "temps"
            value = {temps}
            onChange = {evt=> setTemps(evt.target.value)}
            placeholder = "Enter temp words, separated by commas"
          />
          <InputBox
            id = "fillers"
            value = {fillers}
            onChange = {evt => setFillers(evt.target.value)}
            placeholder = "Enter filler words, separated by commas"
          />
        </div>
        <TextArea
          id = "paragraph_text"
          value = {string}
          onChange = {evt => setString(evt.target.value)}
          cols = "80"
          rows = "20"
          placeholder = 'Enter Text Here'
        />
        <ROTextArea
          id = "paragraph_text"
          value = {after_string}
          onChange = {evt => setAfterString(evt.target.value)}
          cols = "80"
          rows = "20"
          placeholder = 'Filled in String Here'
        />
      </div>
      <button onClick = {Change}>Click Me</button>
    </div>
  )
}




export default App
