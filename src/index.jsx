import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import FontStyles from './styles/fontStyles';
import theme from './styles/theme';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <FontStyles />
          <App />
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
