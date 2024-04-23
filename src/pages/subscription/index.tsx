import { Button, Checkbox, Container, Flex, Icon, SimpleGrid, Switch, Text, useToast } from "@chakra-ui/react";
import { darken } from "polished";
import { useEffect, useState } from "react";
import { Image } from "../../components/Image";
import { Section } from "../../components/Section";
import { theme } from "../../styles/theme";
import Router from 'next/router'
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { CyclistFormFields } from "../../components/Forms/CyclistFormFields";
import { MainHero } from "../../components/parts/MainHero";
import { isAfter } from "date-fns";
import { Contact } from "../../components/parts/Contact";
import { useIsActiveSubscription } from "../../hooks/useIsActiveSubscription";

export default function SubscriptionPage() {

  const { isActiveSubscription } = useIsActiveSubscription()

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
        bgColor="black"
      >
        {isActiveSubscription ?
          (
            <>
              <Text
                fontFamily="heading"
                fontWeight="black"
                fontSize={["xl", "2xl", "2xl", "3xl"]}
                textTransform="uppercase"
                alignSelf={["center", "center", "flex-start"]}

                bgColor="white"

                w={["md", "sm", "lg", "lg"]}
                textAlign="center"
                px="8"
                py="6"

                boxShadow="0px 0px 10px 10px rgba(0,0,0,0.05)"

                size="lg"
                rounded="full"
              >
                Página de inscrição
              </Text>

              <CyclistFormFields />
            </>
          ) :
          <Flex justify="center" w="100%">
            <Text color="white">Inscrições esgotadas</Text>
          </Flex>}

      </Section>

      <Contact />
    </Flex>

  )
}