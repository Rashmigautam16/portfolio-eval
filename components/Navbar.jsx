import { Avatar, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <Flex  bg="teal.200" justifyContent={"space-between"} p="10px" align={"center"}>
        <Flex w="30%" justifyContent={"space-between"} align="center">
        <Link href={"/"}>
            <Text fontSize={"lg"}> Rashmi Gautam</Text>
        </Link>
        <Link href={"/project"}>
            <Text fontSize={"lg"}> Project</Text>
        </Link>
        <Link href={"/education"}>
            <Text fontSize={"lg"}>Education</Text>
        </Link>
        </Flex>
        <Wrap>
           <WrapItem>
              <Avatar name='Rashmi Gautam' src='https://avatars.githubusercontent.com/u/103721591?v=4' />
           </WrapItem>
        </Wrap>
    </Flex>
  )
}

export default Navbar