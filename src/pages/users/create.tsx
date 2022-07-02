import * as yup from 'yup';
import Link from "next/link";
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Input from "../../components/Form/Input";
import { useMutation } from 'react-query';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { useRouter } from 'next/router';
interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatorio'),
  email: yup.string().required('Email obrigatótio').email('Email inválido'),
  password: yup.string().required('Senha obrigatótio').min(6, 'No minimo 6 caracteres'),
  password_confirm:  yup.string().oneOf([null, yup.ref('password')], "Senhas não conferem")
})

export default function CreateUser() {
  const router = useRouter()
  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post("/users", {
      user: {
        ...user,
        created_at: new Date()
      }
    });

    return response.data.user;
  },{
    onSuccess: () => {
      queryClient.invalidateQueries("users")
    }
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handlerCreateaUser: SubmitHandler<CreateUserFormData> = async (value) => {
    await createUser.mutateAsync(value);

    router.push("/users")
  }

  return (
    <Box>
      <Header />
      
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6","8"]}
          onSubmit={handleSubmit(handlerCreateaUser)}
        >
          <Heading size="large" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                error={formState.errors}
                {...register('name')}
              />
              <Input
                name="email"
                type="email"
                label="E-mail" 
                error={formState.errors}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha" 
                error={formState.errors}
                {...register('password')}
              />
             <Input
                name="password_confirm"
                type="password"
                label="Confirmação da Senha" 
                error={formState.errors}
                {...register('password_confirm')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}