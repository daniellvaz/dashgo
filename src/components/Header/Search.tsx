import { RiSearchLine } from "react-icons/ri";
import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";

export default function SearhcBox() { 
  const inputRef = useRef<HTMLInputElement>(null);
  
  return (
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
        ref={inputRef}
      />
      <Icon as={RiSearchLine}/>
    </Flex>
  )
}