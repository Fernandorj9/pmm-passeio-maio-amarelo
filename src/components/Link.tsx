import NextLink from "next/link";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

type Props = {
  href: string,
} & LinkProps;

export function Link({ children, href, ...rest }: Props) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink display="inline-flex" _hover={{
        textDecoration: 'none'
      }}
        {...rest}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}