import { Input as InputElement, FormControl, FormLabel, InputProps } from "@chakra-ui/react";

interface Props extends InputProps {
  name: string;
  label?: string;
}

export default function Input({ name, label, ...rest }: Props) {
  return (
    <FormControl>
        { !!label && <FormLabel htmlFor="password">{label}</FormLabel>}
        <InputElement 
          name={name} 
          id={name}
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant="filled"
          _hover={{
            bgColor: "gray.900",
          }}
          size="lg"
          {...rest}
        />
      </FormControl>
  )
}