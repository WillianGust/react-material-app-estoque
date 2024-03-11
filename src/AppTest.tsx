import Router from './router';
// import React, { FormEvent, useState } from 'react';
import { Box, CssBaseline, InputLabel, ThemeProvider, createTheme } from '@material-ui/core';



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
      <Box display="flex"  justifyContent="center">
        <InputLabel>
          here is AppTest from the Route
        </InputLabel>
      </Box>
      
    </ThemeProvider>
  );
}

export default App;
