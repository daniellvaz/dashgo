import { Avatar, Box, Flex, HStack, Icon, Input, Stack, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"
export default function Header() {
  return (
    <Flex 
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        Dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="cente"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input 
          color="gray.50" 
          variant="unstyled" 
          px="4"
          mr="4"
          placeholder="Buscar na plataforma" 
          _placeholder={{color: "gray.400"}}
        />
        <Icon as={RiSearchLine}/>
      </Flex>

      <Flex
        align="center"
        ml="auto"
      >
        <HStack
          spacing="4"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine}/>
          <Icon as={RiUserAddLine}/>
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Daniel Murilo Vaz</Text>
            <Text color="gray.300" fontSize="small">daniellmvaz@gmail.com</Text>
          </Box>
          <Avatar size="md" name="Daniel Murilo Vaz" src="https://github.com/daniellvaz.png"/>
        </Flex>
      </Flex>
    </Flex>
  )
}