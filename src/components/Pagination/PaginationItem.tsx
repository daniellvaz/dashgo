import { Button } from "@chakra-ui/react";

interface Props {
  isCurrent?: boolean;
  number: number;
}

export default function PaginationItem({ isCurrent = false, number }: Props) {
  if(isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disablad={{
          bg: "pink.500",
          cursor: "pointer"
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500"
      }}
    >
      {number}
    </Button>
  );
}