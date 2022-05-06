import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export default function Login(){
    return(
        <Container maxWidth="sm">
            <Stack spacing={2}>
            <h2>Login</h2>
            <p>Username:</p>
            <TextField size="small" id="outlined-basic" label="Type your e-mail or phone" variant="outlined" />
            <p>Password:</p>
            <TextField size="small" id="outlined-basic" label="Type your password" variant="outlined"  />
            <Grid container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center" >
                <Grid>
                    <Button variant="contained" color="secondary">Sign in</Button>
                </Grid>
                <Grid>
                    <Button variant="contained" color="secondary">Register</Button>
                </Grid>
            </Grid>

        </Stack>
        </Container>
    )
}