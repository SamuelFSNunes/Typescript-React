import {Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../components/Card/CardInfo"
import { useEffect, useState } from "react"
import { api } from "../components/api"
import internal from "stream"

interface UserData{
  email:string
  password:string
  name:string
  balance:internal
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>()
  useEffect(()=>{
    const getData =async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    getData()
  }, [])

  const actualData = new Date()

  return(
    <Center>
      <SimpleGrid columns={2} spacing={8} marginTop={16}>
        {
          userData === undefined || userData === null ?
          <Center>
            <Spinner size={"xl"} color="white"/>
          </Center>:
          (
          <>
          <CardInfo mainContent={`Bem-Vindo ${userData?.name}`} content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>   
          <CardInfo mainContent="Saldo" content={`R$ ${userData?.balance}`}/>
          </>
          )  
        }
      </SimpleGrid>
    </Center>
  )
}
export default Conta