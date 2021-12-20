import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Characters from './pages/Characters';
import About from './pages/About';

const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    gray10: '#101416',
    gray9: '#212529',
    gray8: '#343a40',
    gray7: '#495057',
    gray6: '#868e96',
    gray5: '#adb5bd',
    gray4: '#ced4da',
    gray3: '#dee2e6',
    gray2: '#e9ecef',
    gray1: '#f8f9fa'
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    color: #fff;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='characters' element={<Characters />} />
      <Route path='about' element={<About />} />
    </Routes>
  </ThemeProvider>
);

export default App;
