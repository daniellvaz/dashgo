import { ElementType } from "react";
import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";

interface Props extends LinkProps {
  text: string;
  icon?: ElementType;
}

export default function NavLink({ text, icon, ...rest }: Props) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">{text}</Text>
    </Link>

  )
}