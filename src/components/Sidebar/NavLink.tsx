import { ElementType } from "react";
import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import ActiveLink from '../ActiveLink';

interface Props extends LinkProps {
  text: string;
  icon?: ElementType;
  href: string;
}

export default function NavLink({ text, icon, href, ...rest }: Props) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{text}</Text>
      </ChakraLink>
    </ActiveLink>

  )
}