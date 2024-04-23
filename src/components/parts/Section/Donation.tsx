import { Flex, Text, Divider, useBreakpointValue } from "@chakra-ui/react";
import { Section } from "../../Section";
import { Image } from "../../Image"
import { Link } from "../../Link";

export function DonationSection() {
  return (
    <Section
      id="doacao-section"

      color="black"
      backgroundColor="brand.yellow"
    >
      <Flex
        align="center"
        direction={["column", "column", "row", "row"]}
        justify="space-around"
        h="100%"
        gridGap={["4", "4", "4", "10"]}
      >
        <Flex
          align="center"
          justify="center"
          direction={["column", "column", "column", "column", "row", "row"]}
          w={["lg", "lg", "xl", "4xl"]}
        >
          <Image
            src="/assets/icons/doacao-icone.webp"
            alt="Figura monocromática em preto de duas mãos e uma cesta de alimentos representando a doação de alimentos."
            w="36"
            width="400"
            height="400"
            objectFit="contain"
            placeholder="blur"
          />
          <Flex
            direction="column"
            fontSize={["4xl", "4xl", "4xl", "4xl", "5xl"]}
            fontWeight="extrabold"
            textTransform="uppercase"
            fontFamily="heading"
            justify="center"
            align={["center", "center", "center", "center", "flex-start"]}
          >
            <Text fontSize={["4xl", "4xl", "4xl", "5xl", "7xl"]} mb={["-6", "-6", "-6", "-8", "-10"]}>2KG</Text>
            <Text>DE ALIMENTO</Text>
          </Flex>
        </Flex>

        <Text
          fontSize={["6xl", "6xl", "6xl", "6xl", "9xl"]}
          fontWeight="extrabold"
          textTransform="uppercase"
          fontFamily="heading"
        >
          =
        </Text>

        <Flex
          align={["center", "center", "flex-start", "flex-start"]}
          justify="center"
          direction="column"
          gridGap="4"
        >
          <Flex className="medalha"
            align="center"
            justify="center"
            gridGap="8"
            flexDirection={["column", "column", "column", "row"]}
          >
            <Image
              src="/assets/icons/medalha-icone.webp"
              alt="Figura monocromática em preto de uma medalha com uma estrela desenhada no centro."
              w="36"
              width="400"
              height="400"
              placeholder="blur"
            />
            <Text
              fontSize={["2xl", "2xl", "2xl", "4xl"]}
              w={["xs", "auto", "md", "md", "md"]}
              textAlign={["center", "center", "center", "left"]}
              fontWeight="extrabold"
              textTransform="uppercase"
              fontFamily="heading"
              lineHeight="36px"
            >
              medalha personalizada
            </Text>
          </Flex>

          <Flex className="camiseta"
            align="center"
            justify="center"
            gridGap="8"
            flexDirection={["column", "column", "column", "row"]}
          >
            <Image
              src="/assets/icons/camisa-icone.webp"
              alt="Figura monocromática em preto do contorno de uma camisa."
              w="36"
              width="242"
              height="243"
              placeholder="blur"
            />
            <Text
              fontSize={["2xl", "2xl", "2xl", "4xl"]}
              w={["xs", "auto", "md", "md", "md"]}
              textAlign={["center", "center", "center", "left"]}
              fontWeight="extrabold"
              textTransform="uppercase"
              fontFamily="heading"
              lineHeight="36px"
            >
              camisa do passeio maio amarelo 2022
            </Text>
          </Flex>
        </Flex>

      </Flex>
      <Text alignSelf="center" fontSize={["xl", "xl", "2xl"]} textAlign="center" fontFamily="heading">
        A entrega dos alimentos deve ser realizada no dia 29 de abril, entre 8h e 17h, no <Link href="https://goo.gl/maps/WMfnq5zoak8dUDjR7" textDecoration="underline">
          Ginásio Municipal Pedro Ciarlini
        </Link>
        .
      </Text>
    </Section >
  )
}