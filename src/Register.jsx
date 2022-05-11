import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import newTheme from './newTheme'
import {ThemeProvider  } from '@mui/material/styles';

const theme = newTheme();

export default function Register(){
  return(
    <Container maxWidth="sm">
      <Stack spacing={2} justifyContent="center">
        <h1>Criar Conta</h1>
        <p>Nome:</p>
        <TextField size="small" id="outlined-basic" label="Digite seu nome" variant="outlined" />
        <p>E-mail:</p>
        <TextField size="small" id="outlined-basic" label="Digite seu e-mail" variant="outlined" />
        <p>Telefone:</p>
        <TextField size="small" id="outlined-basic" label="Digite seu telefone" variant="outlined" />
        <p>CPF:</p>
        <TextField size="small" id="outlined-basic" label="Digite seu CPF" variant="outlined" />
        <p>Senha:</p>
        <TextField size="small" id="outlined-basic" label="Digite sua senha " variant="outlined" />
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">Registrar</Button>
        </ThemeProvider>
      </Stack>
    </Container>
  )
}

