import React, {useState, useEffect} from 'react'
import { FormControl, InputLabel, Input} from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import FlipMove from 'react-flip-move'
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
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // Gets the unique ID provided by Firebase and the data associated with the unique ID
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  // Sends your message to the DB
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

      <h1>Facebook Messenger Clone</h1>
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="facebookmessenger"/>
      <h3>Welcome {username}</h3>

      <div className="messages_container">
        <FlipMove>
          {messages.map(({id, message}) => (
            <Messages key={id} username={username} message={message}/>
          ))}
        </FlipMove>
      </div>

      <div className="form_container">
        <form className="app_form">
          <FormControl className="app_formControl">
            <InputLabel> Enter Message </InputLabel>
            <Input className="app_input" value={input} onChange={e => setInput(e.target.value)}/>

            <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
              <SendIcon />
            </IconButton>

          </FormControl>
        </form>
      </div>    
      
    </div>

  )
}

export default App
