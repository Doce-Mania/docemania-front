import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import logo from './logo.jpeg';
import Grid from '@mui/material/Grid';
import {ThemeProvider  } from '@mui/material/styles';
import newTheme from './newTheme';

const theme = newTheme()
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 10 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color='primary'>
          <Toolbar >
            <Grid 
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
            <Button href='/' ><Avatar alt="Docemania" src={logo} sx={{ width: 60, height: 60 }}/></Button>
            <Button color="inherit" href='/login'>Login</Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
