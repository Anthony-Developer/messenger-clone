import React, {useState} from 'react'
import { FormControl, InputLabel, Input, IconButton} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import db from '../Firebase'
import firebase from 'firebase'
import '../Styling/InputField.css'

function InputField(props) {
    const [input, setInput] = useState('')

    // Sends your message to the DB
    const sendMessage = (e) => {
        e.preventDefault()
        db.collection('messages').add({
        message: input,
        username: props.username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    return(
        <div>
            <form className="inputField_form">
                <FormControl className="inputField_formControl">
                    <InputLabel> Enter Message </InputLabel>
                    <Input className="inputField_input" value={input} onChange={e => setInput(e.target.value)}/>

                    <IconButton className="inputField_iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
                        <SendIcon />
                    </IconButton>

                </FormControl>
            </form>
        </div>
    )
}

export default InputField