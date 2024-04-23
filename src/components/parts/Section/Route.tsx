import { Flex, Text, Divider, useBreakpointValue } from "@chakra-ui/react";
import { Section } from "../../Section";
import { Image } from "../../Image"

export function RouteSection() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  })

  return (
    <Section
      id="percurso-section"

      color="black"
    >
      <Flex
        align="center"
        justify="space-between"
        gridGap="10"

        flexDirection={["column", "column", "row"]}
      >
        <Image
          src="/assets/icons/percurso-icone.webp"
          alt="Figura monocromática em preto de dois alfinetes de mapa e uma linha pontilhada simbolizando um percurso."
          maxW="lg"
          width="400"
          height="400"
          placeholder="blur"
        />

        {isMobileVersion
          ? <Divider
            orientation={"horizontal"}
            borderWidth="4px"
            borderColor="brand.black"
            opacity="1"
            my="4"
          />
          : <Divider
            orientation={"vertical"}
            h="300px"
            borderWidth="4px"
            borderColor="brand.black"
            opacity="1"
            mx="4"
          />}

        <Flex
          direction="column"
          maxW="lg"
        >
          <Text
            fontSize={["5xl", "7xl", "5xl", "6xl", "7xl"]}
            fontWeight="extrabold"
            textTransform="uppercase"
            fontFamily="heading"
          >
            PERCURSO
          </Text>
          <Text
            fontSize={["4xl", "7xl", "5xl", "6xl", "7xl"]}
            fontWeight="extrabold"
            textTransform="uppercase"
            fontFamily="heading"
          >
            14,7 KM
          </Text>
          <Text
            fontSize="2xl"
            maxW="lg"
          >
            Contemplando espaços públicos e unidades dos principais parceiros do projeto.</Text>
        </Flex>
      </Flex>

      <Image
        src="/assets/percurso.jpeg"
        alt="figura de um mapa com a rota do passeio ciclístico."
        maxW="5xl"
        width="1280"
        height="904"
        alignSelf="center"
        placeholder="blur"

      />
    </Section >
  )
}