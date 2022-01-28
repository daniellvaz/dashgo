import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  showProfileData: boolean;
}

export default function Profile({ showProfileData = true }: Props) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Daniel Murilo Vaz</Text>
          <Text color="gray.300" fontSize="small">daniellmvaz@gmail.com</Text>
        </Box>
        )
      }
      <Avatar size="md" name="Daniel Murilo Vaz" src="https://github.com/daniellvaz.png"/>
    </Flex>
  )
}