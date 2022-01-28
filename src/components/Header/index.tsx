import { Flex } from "@chakra-ui/react";

import Logo from "./Logo";
import Profile from "./Profile";
import SearhcBox from "./Search";
import Notifications from "./NotificationsNav";

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
      <Logo />
      <SearhcBox />
      <Flex
        align="center"
        ml="auto"
      >
        <Notifications />
        <Profile />
      </Flex>
    </Flex>
  )
}