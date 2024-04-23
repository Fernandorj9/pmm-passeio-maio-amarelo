import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Image } from "./Image";

type Props = {
  pageName: string
}

export function Header({ pageName }: Props) {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      bgColor="brand.black"
      position="relative"
    >
      <Head>
        <title>{pageName}</title>
      </Head>

      <Container
        maxW="8xl"
      >

        <Image
          src="/assets/logo-prefeitura.webp"
          alt="logo da prefeitura municipal de mossoró em conjunto com a Secretaria Municipal de Segurança Pública, Defesa Civil, Mobilidade Urbana e Trânsito (SESDEM)"
          w={["40", "2xs", "3xs", "2xs", "2xs", "xs"]}

          width="600"
          height="258"

          position="absolute"
          bottom={["-10", "-12", "-12", "-20"]}
          left={["50%", "50%", "50%", "50%", "50%", "auto",]}

          transform={["translate(-50%, 0%)", "translate(-50%, 0%)", "translate(-50%, 0%)", "translate(-50%, 0%)", "translate(-50%, 0%)", "translate(0%, 0%)"]}

          zIndex="10"
        />

      </Container>
    </Flex>
  )
}