import NavLink from "./NavLink";
import NavSection from "./NavSection";
import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink text="Dashboard" icon={RiDashboardLine}/>
          <NavLink text="Usuários" icon={RiContactsLine}/>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink text="Formulário" icon={RiInputMethodLine}/>
          <NavLink text="Automação" icon={RiGitMergeLine}/>
        </NavSection>
      </Stack>
    </Box>
  )
}