import React, { useState,useEffect } from 'react'
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import './App.css'
import Messages from './Components/Messages'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{username: 'Steve', text: 'Hello World'}, {username: 'Mike', text: 'What World?'}, {username: 'John', text: 'This one Dummy!'}])
  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt('Please enter your Username'))
  }, [])

  // When you hit send message it appends your text to the array of messages
  const sendMessage = (e) => {
    e.preventDefault()
    setMessages([...messages, {username: username, text: input}])
    setInput('')
  }

  return (

    <div className="App">

      <h1>Facebook Messenger</h1>
      <h3>Welcome {username}</h3>

      {messages.map(message => (
        <Messages username={message.username} text={message.text}/>
      ))}

      <form>
        <FormControl>
          <InputLabel >Enter Message </InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}> Send </Button>
        </FormControl>
      </form>
      
    </div>

  )
}

export default App
