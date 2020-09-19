import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'

function Messages(props) {

    return (
        <Card>
            <CardContent>
                <Typography color="initial" variant="h5" component="h2">
                    {props.username} : {props.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Messages
