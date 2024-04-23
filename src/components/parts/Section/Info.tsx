import { Flex, Text, Divider, useBreakpointValue, Heading, Icon } from "@chakra-ui/react";
import { Section } from "../../Section";

import { MdWatchLater } from "react-icons/md";

export function InfoSection() {
  return (
    <Section
      id="info-section"

      backgroundColor="brand.black"
      position="relative"
      overflow="hidden"
      backgroundImage="/assets/camisa-maio-amarelo.webp"
      backgroundRepeat="no-repeat"
      backgroundSize={["200px", "950px", "500px", "600px"]}
      backgroundPosition={["right -20px bottom -100px", "right -700px bottom -50px", "right -200px bottom -200px", "right -200px bottom -200px", "left 90% bottom -200px",]}
    >
      <Heading
        color="brand.yellow"
        fontWeight="black"
        textTransform="uppercase"
        fontSize="5xl"

        maxW="xl"
      >
        Quando será o passeio ciclístico?
      </Heading>

      <Heading
        color="white"
        fontSize="5xl"
        fontWeight="black"
        textTransform="uppercase"
      >
        1° de maio <br />
        <Flex align="center" gridGap=""><Icon as={MdWatchLater} /> 6H30</Flex>
      </Heading>

      <Text
        fontSize="2xl"
        color="yellow"
        maxW="2xl"
      >
        O ponto de partida do Passeio Ciclístico Maio Amarelo 2022 será no Corredor Cultural,
        localizado na Avenida Rio Branco, centro da cidade.
      </Text>
      {/* <Image
          src="/assets/camisa-maio-amarelo.webp"
          w="auto"
          h="xl"
          width={`${1459 * 0.8}`}
          height={`${891 * 0.8}`}
          position="absolute"
          left="0"
          bottom="0"
        /> */}
    </Section>
  )
}