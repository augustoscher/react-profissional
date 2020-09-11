import React from 'react';

import ThemeProvider from './styles/ThemeProvider';
import GlobalStyle from './styles/GlobalStyle';

import Home from './components/pages/Home';

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);

export default App;
