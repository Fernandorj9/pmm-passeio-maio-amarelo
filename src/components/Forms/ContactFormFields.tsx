import { Button, Flex, SimpleGrid, useToast } from "@chakra-ui/react";
import { mask } from "remask";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema, CONTACT_SCHEMA, IContactFormFields } from "../../schemas/contact";
import { Input } from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Contact, getNewContact } from "../../models/contact";
import { createContact } from "../../services/contact";
import { Select } from "../Select";
import { convertEnumToArray } from "../../utils/enumToArray";
import { CONTACT_TYPE } from "../../models/enums/contactType";
import { Textarea } from "../Textarea";

export function ContactFormFields() {
  const toast = useToast()

  const { register, handleSubmit, setValue, getValues, formState: { errors, dirtyFields, isSubmitting } } = useForm({
    resolver: yupResolver(contactFormSchema)
  })

  console.log(errors)

  const handleContactSubmit: SubmitHandler<IContactFormFields> = async (values, e) => {
    // console.log(values)

    let newContact: Contact = {
      ...getNewContact(),
      name: values.name,
      cpf: values.cpf,
      email: values.email,
      message: values.message,
      type: values.type,
    }

    try {
      await createContact(newContact);

      toast({
        title: "Obrigado!",
        description: "Mensagem enviada com sucesso",
        isClosable: true,
        position: "top",
        status: "success"
      })

    } catch (e) {
      console.log(e)

      toast({
        title: "Falha no envio",
        description: e.response?.data.message || e.message || "Erro no envio",
        isClosable: true,
        position: "top",
        status: "error"
      })
    }
  }

  return (
    <Flex as="form" direction='column' onSubmit={handleSubmit(handleContactSubmit)}>
      <Flex
        direction="column"
        gridGap="4"
        bgColor="brand.yellow"
        rounded="3xl"
      >
        <Input
          name={CONTACT_SCHEMA.EMAIL}
          id={CONTACT_SCHEMA.EMAIL}
          {...register(CONTACT_SCHEMA.EMAIL)}
          error={errors.email}

          label="E-mail"
        />


        <SimpleGrid
          minChildWidth="250px"
          gridGap="4"
          columns={[1, 2]}
        >

          <Input
            name={CONTACT_SCHEMA.NAME}
            id={CONTACT_SCHEMA.NAME}
            {...register(CONTACT_SCHEMA.NAME)}
            error={errors.name}

            type="text"

            label="Nome completo"
          />

          <Input
            name={CONTACT_SCHEMA.CPF}
            id={CONTACT_SCHEMA.CPF}
            {...register(CONTACT_SCHEMA.CPF)}
            error={errors.cpf}

            type="text"

            label="CPF"
            placeholder="999.999.999-99"
            onChange={(event) =>
              setValue(CONTACT_SCHEMA.CPF,
                mask(event.currentTarget.value, '999.999.999-99'),
                { shouldDirty: true, shouldValidate: true })
            }
          />

        </SimpleGrid>

        <Select
          name={CONTACT_SCHEMA.TYPE}
          id={CONTACT_SCHEMA.TYPE}
          {...register(CONTACT_SCHEMA.TYPE)}
          error={errors.type}

          label="Tipo"
          defaultValue='Escolha uma opção...'
          placeholder="Escolha uma opção..."
        >
          {convertEnumToArray(CONTACT_TYPE).map(contact => (
            <option key={contact.key} value={contact.value}>{contact.value}</option>
          ))}
        </Select>

        <Textarea
          name={CONTACT_SCHEMA.MESSAGE}
          id={CONTACT_SCHEMA.MESSAGE}
          {...register(CONTACT_SCHEMA.MESSAGE)}
          error={errors.message}

          label="Mensagem"
        />
      </Flex>

      <Button
        mt="10"

        fontFamily="heading"
        fontWeight="black"
        fontSize={["xl"]}
        textTransform="uppercase"

        bgColor="brand.green"
        color="white"
        colorScheme="green"

        w={["xs", "sm"]}
        textAlign="center"
        size="lg"

        rounded="full"
        zIndex="2"

        type="submit"
        isLoading={isSubmitting}
      >
        Enviar mensagem
      </Button>
    </Flex>
  )
}