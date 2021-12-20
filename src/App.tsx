import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Characters from './pages/Characters';
import About from './pages/About';

const queryClient = new QueryClient();

const theme = {
  colors: {
    black: '#101416',
    grayDark: '#343a40',
    grayMedium: '#495057',
    grayLight: '#dee2e6',
    white: '#f8f9fa'
  }
};

const App = () => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='characters' element={<Characters />} />
        <Route path='about' element={<About />} />
      </Routes>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
