import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B76E79'
    },
    secondary: {
      main: '#B76E79'
    }
  },
  tyopography: {
    fontFmily: ['Readex Pro', 'sans-serif'].join(','),
    h3: {
      fontWeight: 'bold'
    },
    h4: {
      fontWeight: '800'
    },
    h5: {
      fontWeight: '800'
    },
    subtitle2: {
      fontWeight: 'bold'
    }
  }
});

export default theme;
