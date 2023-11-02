import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    purple: '#554853',
    beige: '#d6d0d0',
    burgundy: '#251c1c',
  },
  radii: {
    sm: '4px',
    md: '12px',
    lg: '16px',
  },
  fontSize: {
    fsP: '12px',
    fsH4: '20px',
    fsH3: '24px',
    fsH2: '28px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
