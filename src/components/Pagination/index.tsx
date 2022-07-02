import { Box, Stack, Text } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

interface Props {
  totlaCountOfRegister: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void; 
}

const sibLingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to -from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export default function Pagination({ 
  totlaCountOfRegister, 
  registerPerPage = 10, 
  currentPage = 1, 
  onPageChange 
}: Props) {
  const lastPage = Math.floor(totlaCountOfRegister / registerPerPage);

  const previousPages = currentPage > 1 
    ? generatePagesArray(currentPage - 1 - sibLingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + sibLingsCount, lastPage))
    : []

  return (
    <Stack
      direction={["column","row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        
        {currentPage > (1 + sibLingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            { 
              currentPage > (2+ sibLingsCount) && 
              <Text color="gray.300" w="8" textAlign="center" >...</Text> 
            }
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}
        
        <PaginationItem onPageChange={onPageChange} number={currentPage}/>

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}

        {(currentPage + sibLingsCount) < lastPage && (
          <>
            { 
              (currentPage + 1 + sibLingsCount) < lastPage && 
              <Text color="gray.300" w="8" textAlign="center" >...</Text> 
            }
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}