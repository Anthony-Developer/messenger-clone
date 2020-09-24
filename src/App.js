import React, {useState, useEffect} from 'react'
import FlipMove from 'react-flip-move'
import './App.css'
import Messages from './Components/Messages'
import InputField from './Components/InputField'
import db from './Firebase'

function App() {
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

      <InputField username={username}/>
      
    </div>

  )
}

export default App
