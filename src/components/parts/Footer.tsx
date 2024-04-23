import { Flex } from "@chakra-ui/react";
import { Link } from "../Link";

export function Footer() {
  return (
    <Flex
      as="footer"
      bgColor="black"
      align="center"
      justify="space-between"
      p="4"
    >
      <Link
        href="https://www.instagram.com/prefeiturademossoro/" isExternal
        color="gray.500">
        Prefeitura Municipal de Mossoró
      </Link>
      <Link
        href="https://bit.ly/3k5X30q" isExternal
        color="gray.700">
        Developed by Rellyson Douglas
      </Link>
    </Flex>
  )
}