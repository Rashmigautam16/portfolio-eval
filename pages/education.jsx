import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const education = () => {
  return (
    <Flex align={"center"} w="100%" justifyContent={"center"} >
        <Box boxShadow='base' rounded={"xl"}  p="10px">
                <Heading textAlign={"center"} size="md" >Education</Heading>
               <Text  fontSize='sm' p={"5px"}>Full-Stack-Web Developement - Masai Banglore</Text>
               <Text  fontSize='sm' p={"5px"}>B.COM - Delhi University</Text>
               <Text  fontSize='sm' p={"5px"}>Diploma in IT - Govt Institute Delhi</Text>
              </Box>
    </Flex>
  )
}

export default education