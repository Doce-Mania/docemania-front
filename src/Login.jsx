import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

function Login(){
    return(
        <Container maxWidth="sm">
            <h1>Login</h1>
            Username:
            <br/>
            <TextField id="outlined-basic" label="Type your e-mail or your phone" variant="outlined" />
            <br/>
            Password:
            <br/>
            <TextField id="outlined-basic" label="Type your password" variant="outlined" />
            <br/>
            <br/>
            <Button variant="contained" color="secondary">Sign in</Button> or <Button variant="contained" color="secondary">Register</Button>

        </Container>
    )
}