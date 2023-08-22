import { 
  Input,
  Box,
  Center,
  Button
} from '@chakra-ui/react'
import {login} from './login'
import {useState, useEffect} from "react"
import {api} from '../api'

export const Card = () => {
  const [ email, setEmail] = useState('')
  useEffect(()=>{
    const getData =async () => {
      const data = await api
    }
    getData()
  })
  return(
      <Box minHeight='100vh' backgroundColor='black' padding='25px'>
        <Box height={250} backgroundColor='white' borderRadius='25px' padding='15px' display='flex' flexDirection='column' justifyContent='space-around'>
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder='email' value={email} onChange={(event)=> {setEmail(event.target.value)}} />
          <Input placeholder='password'/>
          <Button onClick={()=>{login(email)}} colorScheme='teal' size='md'>
            Button
          </Button>
          <Center>
          </Center>
        </Box>
      </Box>
  );
}