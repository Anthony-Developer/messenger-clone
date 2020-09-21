import React, { useState,useEffect } from 'react'
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import './App.css'
import Messages from './Components/Messages'
import db from './Firebase'
import firebase from 'firebase'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')


  useEffect(() => {
    setUsername(prompt('Please enter your Username'))
    //Getting data from Firebase Database
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  // When you hit send message it appends your text to the array of messages
  const sendMessage = (e) => {
    e.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (

    <div className="App">

      <h1>Facebook Messenger</h1>
      <h3>Welcome {username}</h3>

      <div className="messages_container">
        {messages.map(message => (
          <Messages username={username} message={message}/>
        ))}
      </div>

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
