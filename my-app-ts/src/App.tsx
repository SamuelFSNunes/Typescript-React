import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import Conta from './pages/Conta';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';

function App() {
  
  return (
    <ChakraProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/conta' element={<Conta/>} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ChakraProvider>
    
  );
}

export default App;
