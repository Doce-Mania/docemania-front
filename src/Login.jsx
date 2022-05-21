import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider  } from '@mui/material/styles';
import newTheme from './newTheme'

const theme = newTheme();

export default function Login(){
    return(
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <h2>Entrar</h2>
          <p>E-mail:</p>
          <TextField size="small" id="outlined-basic" label="Digite seu e-mail" variant="outlined" />
          <p>Senha:</p>
          <TextField size="small" id="outlined-basic" label="Digite sua senha" variant="outlined"  />
          <ThemeProvider theme={theme}>
            <Grid container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                  style={{marginTop: '20px'}}>
              <Grid>
                <Button variant="contained" color="primary">Entrar</Button>
              </Grid>
              <Grid>
                <Button variant="contained" color="primary" href='/register'>Criar Conta</Button>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Stack>
      </Container>
    )
}