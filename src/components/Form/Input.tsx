import { FormControl, FormLabel } from "@chakra-ui/react";

export default function Input({ name, label }) {
  return (
    <FormControl>
        { !!label && <FormLabel htmlFor="password">Senha</FormLabel>}
        <Input 
          name="password" 
          type="password"
          id={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: "gray.900",
          }}
          size="lg"
        />
      </FormControl>
  )
}