import * as yup from "yup";
import Input from "../components/Form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

 interface SignIn {
   email: string;
   password: string;
 }

 const signInFormSchema = yup.object().shape({
   email: yup.string().required('Email obrigatótio').email('Email inválido'),
   password: yup.string().required()
 })

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

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
            error={formState.errors}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            {...register('password')} 
            error={formState.errors}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
