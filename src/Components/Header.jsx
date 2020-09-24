import React from 'react'
import {Typography} from '@material-ui/core'
import '../Styling/Header.css'

function Header(props) {

    return(
        <div>
            <Typography className="header_text" color="initial" variant="h3">
                Facebook Messenger Clone
            </Typography>
            <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="facebookmessenger"/>
            <Typography className="header_text" color="initial" variant="h5">
                Welcome {props.username}
            </Typography>
            
        </div>

    )
} 

export default Header