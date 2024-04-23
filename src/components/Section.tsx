import { Container, Flex, FlexProps } from "@chakra-ui/react";

export function Section({ children, ...rest }: FlexProps) {
  return (
    <Flex
      as="section"
      w="100%"
      h={["max-content", "max-content", "max-content"]}
      minH={["100vh", "100vh", "xl"]}

      py="28"

      direction={["row", "row", "row", "column"]}

      position="relative"
      overflow="hidden"

      {...rest}
    >
      <Container
        w="100%"
        h="100%"
        maxW="8xl"

        display="flex"
        flexDirection="column"
        gridGap="10"
      >
        {children}
      </Container>
    </Flex>
  )
}