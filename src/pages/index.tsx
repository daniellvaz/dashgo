import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/Form/Input";

 interface SignIn {
   email: string;
   password: string;
 }

export default function SignIn() {
  const { register, handleSubmit } = useForm();

  const handleSignIn: SubmitHandler<SignIn> = (data) => {
    console.log(data)
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex 
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800" 
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">              
          <Input
            name="email"
            label="E-Mail"
            type="email"
            {...register('email')} 
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            {...register('password')} 
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
