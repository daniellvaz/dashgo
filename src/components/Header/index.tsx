import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import Logo from "./Logo";
import Profile from "./Profile";
import SearhcBox from "./Search";
import Notifications from "./NotificationsNav";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export default function Header() {
  const { onOpen } = useSidebarDrawer()
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
      { !isWideVersion && (
        <IconButton 
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          xr="2"
        >

        </IconButton>
      ) }

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