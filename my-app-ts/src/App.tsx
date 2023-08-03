import {useState} from 'react'
import {Header} from './components/Header/Header'
import {Card} from './components/Card/Card'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [ value, setValue] = useState(0)
  const [ outroValor, setOutroValor] = useState(1)
  return (
    
    <ChakraProvider>
      <Header/>
      <Card />
      <div>
        <button onClick={()=>setValue(value+1)}>
          Add
        </button>
        <h1>{value}</h1>

        <button onClick={()=>setOutroValor(outroValor+1)}>
          Add
        </button>
        <h1>{outroValor}</h1>
      </div>
    </ChakraProvider>
    
  );
}

export default App;
