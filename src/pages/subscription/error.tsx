import { Container, Flex, Heading, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { MainHero } from "../../components/parts/MainHero";
import { StepCard } from "../../components/Cards/StepCard";
import { GetServerSideProps } from "next";

type Props = {
  message: string
}

export default function ErrorPage({ message }: Props) {
  const toast = useToast()

  const [isChecked, setIsChecked] = useState(false);

  return (
    <Flex
      w="100%"
      direction="column"
    >
      <Header pageName="Formulário de inscrição | Passeio ciclístico Maio Amarelo 2022" />

      {/* principal */}
      <MainHero h="md">

      </MainHero>
      <Section
        bgColor="brand.red"
      >
        <Text
          fontFamily="heading"
          fontWeight="black"
          fontSize={["xl", "2xl", "2xl", "3xl"]}
          textTransform="uppercase"
          alignSelf={["center", "center",]}

          bgColor="white"

          w={["md", "sm", "2xl", "container.md"]}
          textAlign="center"
          px="8"
          py="6"

          boxShadow="0px 0px 10px 10px rgba(0,0,0,0.05)"

          size="lg"
          rounded="full"
        >
          Atenção
        </Text>

        <Container
          maxWidth="8xl"

          order={[1, 1, 2]}

          fontSize="2xl"
          fontFamily="heading"
          fontWeight="medium"
          color="white"

          textAlign="center"
        >
          <Text mb="2">{message}</Text>
        </Container>
      </Section>
    </Flex>

  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  let message = ctx.query?.message as string || ""

  return {
    props: {
      message
    }
  }
}