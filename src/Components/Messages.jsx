import React, { forwardRef } from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import '../Styling/Messages.css'

const Messages = forwardRef(({username, message}, ref) => {
    const currentUser = username === message.username

    return (
        <div ref={ref} className={`messages_card ${currentUser && "message_user"}`}>
            <Card className={currentUser ? "message_user_card" : "message_guest_card"}>
                <CardContent>
                    <Typography color="initial" variant="h6">
                        {/* Shows other users name, not your own */}
                        {!currentUser && `${message.username || 'Unknown User'}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Messages
