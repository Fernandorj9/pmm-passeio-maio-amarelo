import { Heading, Text } from "@chakra-ui/react";
import { ContactFormFields } from "../Forms/ContactFormFields";
import { Section } from "../Section";

export function Contact() {
  return (
    <Section
      id="contato"
      bgColor="brand.yellow"
    >
      <Heading>Contato</Heading>
      <Text
        fontSize={["xl", "xl", "2xl",]}
        fontFamily="heading"
        fontWeight="medium"
      >
        Em caso de dúvidas, suporte ou sugestão, por favor considere entrar em contato conosco:
      </Text>

      <ContactFormFields />
    </Section>
  )
}