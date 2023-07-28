import {Layout} from './components/Layout'
import styled from 'styled-components'
import { 
  ChakraProvider,
  Input,
  Box,
  Center,
  Button
} from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='black' padding='25px'>
        <Box height={250} backgroundColor='white' borderRadius='25px' padding='15px' display='flex' flexDirection='column' justifyContent='space-around'>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder='email'/>
          <Input placeholder='password'/>
          <Center>
            <Button colorScheme='teal' size='md'>
              Button
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
