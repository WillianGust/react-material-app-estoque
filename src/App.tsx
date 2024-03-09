import Router from './router';
// import React, { FormEvent, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core';



function App() {
  const theme = createTheme({
    palette: {
      type: 'light'
    }
  })
  
  return (
    <ThemeProvider theme={theme}>
      {/* <h1>Hello World</h1> */}
      <CssBaseline />
      <Router />
      
    </ThemeProvider>
  );
}

export default App;
