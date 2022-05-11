import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export default function newTheme(){ 
  const theme = createTheme({

    palette: {
      primary: {
          main: red[50],
      },
    }
  });
  return(
    theme
  );
};