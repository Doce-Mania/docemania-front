import * as React from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import newTheme from "./newTheme";
import {ThemeProvider  } from '@mui/material/styles';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

const theme = newTheme();
export default function Profile(){
    return(
      <ThemeProvider theme={theme}>
      <Grid>
      <Container maxWidth="xs">
        <div>
          <h2>Nome do Usuário</h2>
        </div>
        <div>
          <h3>Dados do perfil</h3>
            <p>E-mail:</p>
            <p>Telefone:</p>
            <p>Documento (CPF):</p>
            <p>Senha:</p>
            <Button variant="contained" 
                    color="primary"  
                    size="small"
            >
              <EditIcon fontSize="small"/>editar 
            </Button>
        </div>
        <h3>Endereço</h3>
        <h3>Metodos de pagamento</h3>
       </Container>
    </Grid>
    </ThemeProvider>
    );
};