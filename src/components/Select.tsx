import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Select as ChakraSelect,
  InputGroup,
  SelectProps as ChakraSelectProps,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from "react";


export interface SelectProps extends ChakraSelectProps {
  name: string;
  label?: string;
  error?: FieldError;
  isReadOnly?: boolean;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps>
  = ({ name, label, error = null, isReadOnly = false, ...rest }, ref) => {

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
          <ChakraSelect
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
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    )
  }

export const Select = forwardRef(SelectBase)