import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputProps as ChakraInputProps,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from "react";


export interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  isReadOnly?: boolean;
  withPhoneAddon?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, error = null, isReadOnly = false, withPhoneAddon = false, ...rest }, ref) => {

    const color = useColorModeValue("gray.800", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const hoverBgColor = useColorModeValue("gray.50", "gray.800");
    const borderColor = useColorModeValue("transparent", "gray.500");

    const { colorMode } = useColorMode()

    return (
      <FormControl isInvalid={!!error} w={rest.w}>
        {!!label &&
          <FormLabel
            color={color}
            htmlFor={name}
            maxWidth="100%"
            display="flex"
            fontFamily="heading"
            fontSize="xl"
            fontWeight="black"
            textTransform="uppercase"
          >
            {label}
          </FormLabel>}

        <InputGroup
          size="lg"
        >
          {withPhoneAddon && <InputLeftAddon fontFamily="input">+55</InputLeftAddon>}

          <ChakraInput
            name={name}
            borderColor={borderColor}
            focusBorderColor="black"
            bgColor={bgColor}
            variant="filled"
            fontFamily="heading"
            rounded="full"
            _focus={{
              bgColor: "white",
            }}

            aria-disabled={isReadOnly ? true : false}
            isReadOnly={isReadOnly}

            ref={ref}
            {...rest}
          />
        </InputGroup>

        {!!error && (
          <FormErrorMessage fontWeight="bold">
            {(rest.type === "date" && error.type === "typeError") ? ("Formato de data inválida") : (error.message)}
          </FormErrorMessage>
        )}
      </FormControl>
    )
  }

export const Input = forwardRef(InputBase)