import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Characters from './pages/Characters';
import About from './pages/About';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="characters" element={<Characters />} />
      <Route path="about" element={<About />} />
    </Routes>
  </QueryClientProvider>
);

export default App;
