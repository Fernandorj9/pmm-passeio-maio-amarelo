import { Flex, FormControl, FormErrorMessage, FormLabel, TextareaProps as ChakraTextAreaProps, Textarea as ChakraTextarea, useColorModeValue, Text } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from "react";

export interface TextAreaProps extends ChakraTextAreaProps {
  name: string;
  label?: string;
  error?: FieldError;
  maxLength?: number;
  minLength?: number;
  length?: number;
}

const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps>
  = ({ name, label, error = null, maxLength, minLength, length, ...rest }, ref) => {

    const color = useColorModeValue("gray.800", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const hoverBgColor = useColorModeValue("gray.50", "gray.800");
    const borderColor = useColorModeValue("transparent", "gray.500");

    return (
      <FormControl isInvalid={!!error}>
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

            {!!maxLength &&
              <Text ml="2" fontSize="sm" as="span" color="gray" fontWeight="bold" px={1}>({length}/{maxLength})</Text>
            }

          </FormLabel>}

        <ChakraTextarea
          bgColor={bgColor}
          fontFamily="heading"
          rounded="lg"
          _focus={{
            bgColor: "white",
          }}

          name={name}
          fontSize="lg"

          // borderColor={borderColor}
          focusBorderColor="brand.teal"
          variant="filled"
          maxLength={maxLength || 1000}
          minLength={minLength || 0}

          ref={ref}
          {...rest}
        />

        {!!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    )
  }

export const Textarea = forwardRef(TextAreaBase)