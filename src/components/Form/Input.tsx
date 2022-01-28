import { FormControl, FormLabel, Input as InputElement, InputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface Props extends InputProps {
  name: string;
  label?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ name, label, ...rest }, ref) => {
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
          ref={ref}
        />
      </FormControl>
  )
}

export default forwardRef(Input)