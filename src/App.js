import React, {useState, useEffect} from 'react'
import FlipMove from 'react-flip-move'
import './App.css'
import Header from './Components/Header'
import Messages from './Components/Messages'
import InputField from './Components/InputField'
import db from './Firebase'

function App() {
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt('Please enter your Username'))
    //Getting data from Firebase Database
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      // Gets the unique ID provided by Firebase and the data associated with the unique ID
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

 
  return (

    <div className="App">

      <div className="header_container">
        <Header username={username}/>
      </div>

      <div className="messages_container">
        <FlipMove>
          {messages.slice(-6).map(({id, message}) => (
            <Messages key={id} username={username} message={message}/>
          ))}
        </FlipMove>
      </div>

      <div className="input_container"> 
        <InputField username={username}/>
      </div>  
      
    </div>

  )
}

export default App
