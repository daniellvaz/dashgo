import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Daniel Murilo Vaz</Text>
        <Text color="gray.300" fontSize="small">daniellmvaz@gmail.com</Text>
      </Box>
      <Avatar size="md" name="Daniel Murilo Vaz" src="https://github.com/daniellvaz.png"/>
    </Flex>
  )
}