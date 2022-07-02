
import LinkNext from "next/link";
import { RiAddLine } from "react-icons/ri";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Pagination from "../../components/Pagination";
import { 
  Box, 
  Button, 
  Flex, 
  Heading, 
  Icon, 
  Table, 
  Th, 
  Thead, 
  Tr, 
  Checkbox, 
  Tbody, 
  Td, 
  Text, 
  useBreakpointValue, 
  Spinner,
  Link
} from "@chakra-ui/react";
import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page);

  async function handelPrefetchUser(id: number) {
    await queryClient.prefetchQuery(['user', id], async () => {
      const response = await api.get(`/users/${id}`);

      return response.data
    },
    {
      staleTime: 1000 * 60 * 10
    })
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml={4}/>}
            </Heading>

            <LinkNext href="/users/create">
              <Button 
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />} 
              >
                Criar novo
              </Button>
            </LinkNext>
          </Flex>

          {
            isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">Falha ao obter os dados</Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px="6" color="gray.300" width="8">
                        <Checkbox colorScheme="pink"/>
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de cadastro</Th>}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      data.users.map(user => (
                        <Tr key={user.id}>
                          <Td px="6">
                            <Checkbox colorScheme="pink"/>
                          </Td>
                          <Td>
                            <Box>
                              <Link color="purple.400" onMouseEnter={() => handelPrefetchUser(user.id)}> 
                                <Text fontWeight="bold">{user.name}</Text>
                              </Link>
                              <Text fontSize="sm" color="gray.300">{user.email}</Text>
                            </Box>
                          </Td>
                          {isWideVersion && <Td>{user.createdAt}</Td>}
                        </Tr>
                      ))
                    }
                    <Tr>
                      
                    </Tr>
                  </Tbody>
                </Table>

                <Pagination 
                  totlaCountOfRegister={data.totalCount}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  )
}