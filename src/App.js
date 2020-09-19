import React, { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(['test1', 'test2', 'test3'])

  // When you hit send messages it appends your text to the array of messages
  const sendMessage = (e) => {
    setMessages([...messages, input])
    setInput('')
  }

  console.log(messages)

  return (

    <div className="App">

      <h1>Facebook Messenger</h1>

      <input value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={sendMessage}> Send </button>

    </div>

  )
}

export default App
