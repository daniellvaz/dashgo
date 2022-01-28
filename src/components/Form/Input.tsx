import { FormControl, FormErrorMessage, FormLabel, Input as InputElement, InputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError, FieldErrors } from "react-hook-form";

interface Props extends InputProps {
  name: string;
  label?: string;
  error?: FieldErrors;
}


const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = 
  ({ name, label, error = null, ...rest }, ref) => {

  return (
    <FormControl isInvalid={!!error[name]}>
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

        {!!error[name] && (
          <FormErrorMessage>
            {error[name].message}
          </FormErrorMessage>
        ) }
      </FormControl>
  )
}

export default forwardRef(Input)