import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


function Register(){
  return(
      <Container maxWidth="sm" sx={{ p: 2, border: '1px smoothed black' }}>
        <h1>Register</h1>
        Name:
        <br/>
        <TextField id="outlined-basic" label="Type your name" variant="outlined" />
        <br/>
        e-mail:
        <br/>
        <TextField id="outlined-basic" label="Type your e-mail" variant="outlined" />
        <br/>
        Phone:
        <br/>
        <TextField id="outlined-basic" label="Type your phone" variant="outlined" />
        <br/>
        CPF:
        <br/>
        <TextField id="outlined-basic" label="Type your CPF" variant="outlined" />
        <br/>
        <br/>
        <Button variant="contained" color="secondary">Done</Button>
        
      </Container>

  )
}
export default Register;



