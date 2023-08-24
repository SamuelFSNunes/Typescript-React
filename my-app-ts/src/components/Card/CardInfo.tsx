import { Box, Text } from "@chakra-ui/react"
interface ICArdInfo{
  mainContent:string
  content:string
}
const CardInfo = ({mainContent, content}: ICArdInfo) =>{
  return(
    <Box backgroundColor='white' minHeight='120px' color="black" padding={8} borderRadius={15}>
      <Text fontSize='2xl' fontWeight='bold'>{mainContent}</Text>
      <Text fontSize="xl">{content}</Text>
    </Box>
  )
}
export default CardInfo