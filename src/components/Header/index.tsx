import { Flex, useBreakpointValue } from "@chakra-ui/react";

import Logo from "./Logo";
import Profile from "./Profile";
import SearhcBox from "./Search";
import Notifications from "./NotificationsNav";

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

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
      { isWideVersion && (<SearhcBox />) }
      <Flex
        align="center"
        ml="auto"
      >
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}