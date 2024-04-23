import { Flex, Text, Divider, useBreakpointValue } from "@chakra-ui/react";
import { Section } from "../../Section";
import { Image } from "../../Image"

import cyclistIcon from "../../../../public/assets/icons/ciclista-icone.webp"

export function ProposalSection() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  })

  return (
    <Section
      id="proposta-section"

      color="white"
      backgroundColor="black"
    >
      <Flex
        align="center"
        justify="space-between"
        gridGap="10"
        h="100%"
        flexGrow={1}
        flexDirection={["column", "column", "row"]}
      >
        <Flex
          align="center"
          direction="column"
          gridGap="4"
        >
          <Image
            src={cyclistIcon}
            alt="Figura monocromática em amarelo de uma bicicleta e um ciclista em cima dela."
            w="60"
            width="500"
            height="443"
            placeholder="blur"
            priority
          />

          <Text
            fontSize={["5xl", "5xl", "7xl"]}
            fontWeight="extrabold"
            textTransform="uppercase"
            fontFamily="heading"
          >
            PROPOSTA
          </Text>
        </Flex>

        {isMobileVersion
          ? <Divider
            orientation="horizontal"
            borderWidth="4px"
            borderColor="white"
            opacity="1"
            my="4"
          />
          : <Divider
            orientation="vertical"
            h="300px"
            borderWidth="4px"
            borderColor="white"
            opacity="1"
            mx="4"
          />}


        <Flex
          direction="column"
        >

          <Text
            fontSize="2xl"
            textAlign="justify"
          >
            O passeio ciclístico Maio Amarelo 2022, idealizado pela Secretaria Municipal de Segurança Pública, Defesa Civil,
            Mobilidade Urbana e Trânsito (SESDEM) tem como objetivo alertar a população sobre a importância de um
            trânsito seguro. Além de estimular o uso de bicicletas como atividade física esportiva, na promoção da
            saúde e bem-estar. Possibilitando ainda uma alternativa de transporte, promovendo um ambiente mais saudável
            e sustentável.
          </Text>
        </Flex>
      </Flex>
    </Section>
  )
}