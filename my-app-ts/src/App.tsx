import {Header} from './components/Header/Header'
import {Card} from './components/Card/Card'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  
  return (
    
    <ChakraProvider>
      <Header/>
      <Card />
    </ChakraProvider>
    
  );
}

export default App;
