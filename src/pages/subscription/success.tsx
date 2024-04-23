import { Container, Flex, Heading, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { MainHero } from "../../components/parts/MainHero";
import { StepCard } from "../../components/Cards/StepCard";
import { GetServerSideProps } from "next";

type Props = {
  hasConfirmed: boolean
}

export default function SuccessPage({ hasConfirmed }: Props) {
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
        bgColor="brand.green"
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
          Inscrição {hasConfirmed ? `confirmada` : `realizada`} com sucesso
        </Text>

        <Flex
          direction="column"
          align="center"
          mt="10"

          gridGap="4"
          order={[2, 2, 1]}
        >
          <Heading
            textTransform="uppercase"
            color="white"
            fontWeight="black"
            fontSize="5xl"
          >
            Próximos passos
          </Heading>

          <SimpleGrid
            columns={[1, 1, 2, 2, 4, 4, 4]}
            w="100%"
            gridGap="8"
          >
            <StepCard
              step={<>Inscrição <br /> realizada</>}
              concluded={true}
            />
            <StepCard
              step={hasConfirmed ? <>inscrição <br /> confirmada</> : <>Confirmar <br /> inscrição</>}
              concluded={hasConfirmed}
              isNextStep={!hasConfirmed}
            />
            <StepCard
              step={<>Pegar <br /> camiseta</>}
              concluded={false}
              isNextStep={hasConfirmed}
            />
            <StepCard
              step={<>Passeio <br /> ciclístico</>}
              concluded={false}
            />
          </SimpleGrid>
        </Flex>

        <Container
          maxWidth="8xl"

          order={[1, 1, 2]}

          fontSize="2xl"
          fontFamily="heading"
          fontWeight="medium"
          color="white"

          textAlign="center"
        >
          {!hasConfirmed && <Text mb="2">Enviamos um comprovante de inscrição para seu e-mail.</Text>}
          {!hasConfirmed && <Text fontWeight="bold" mb="2">Verifique também sua caixa de spam.</Text>}
          <Text>
            Não esqueça de confirmar sua inscrição para o Passeio Ciclístico Maio Amarelo 2022
            levando 2kg de alimento no dia 29 de abril, das 7h às 17h, na sede da SESDEM.
          </Text>
        </Container>
      </Section>
    </Flex>

  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const hasConfirmed = ctx.query.hasConfirmed == "1"

  return {
    props: {
      hasConfirmed
    }
  }
}