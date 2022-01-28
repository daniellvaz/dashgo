import NavLink from "./NavLink";
import NavSection from "./NavSection";
import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" text="Dashboard" icon={RiDashboardLine}/>
        <NavLink href="/users" text="Usuários" icon={RiContactsLine}/>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink href="/forms" text="Formulário" icon={RiInputMethodLine}/>
        <NavLink href="/automation" text="Automação" icon={RiGitMergeLine}/>
      </NavSection>
    </Stack>
  );
}