import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import '../Styling/Messages.css'

function Messages({username, message}) {
    const currentUser = username === message.username

    return (
        <div className={`messages_card ${currentUser && "message_user"}`}>
            <Card className={currentUser ? "message_user_card" : "message_guest_card"}>
                <CardContent>
                    <Typography color="initial" variant="h5" component="h2">
                        {message.username} : {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Messages
