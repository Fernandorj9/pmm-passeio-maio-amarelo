import { Button, Flex, SimpleGrid, useToast } from "@chakra-ui/react";
import { mask, unMask } from "remask";
import { yupResolver } from "@hookform/resolvers/yup";
import { cyclistFormSchema, CYCLIST_SCHEMA, ICyclistFormFields } from "../../schemas/cyclist";
import { Input } from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { Cyclist, getNewCyClist } from "../../models/cyclist";
import Router from "next/router";
import { createCyclist } from "../../services/cyclist";

export function CyclistFormFields() {
  const toast = useToast()

  const { register, handleSubmit, setValue, getValues, formState: { errors, dirtyFields, isSubmitting } } = useForm({
    resolver: yupResolver(cyclistFormSchema)
  })

  const [cep, setCep] = useState("");
  const [isAddressEditable, setIsAddressEditable] = useState(true);

  const handleCyclistSubmit: SubmitHandler<ICyclistFormFields> = async (values, e) => {
    // console.log(values)

    let newCyclist: Cyclist = {
      ...getNewCyClist(),
      name: values.name,
      cpf: values.cpf,
      address: {
        number: values.number,
        street: values.street,
        city: values.city,
        state: values.state,
      },
      email: values.email,
      birthDate: values.birthDate,
    }

    try {
      await createCyclist(newCyclist);

      toast({
        title: "Sucesso",
        description: "Inscrição realizada com sucesso",
        isClosable: true,
        position: "top",
        status: "success"
      })

      Router.push('/subscription/success')

    } catch (e) {
      console.log(e)

      toast({
        title: "Falha no cadastro",
        description: e.response?.data.message || e.message || "Erro no cadastro",
        isClosable: true,
        position: "top",
        status: "error"
      })
    }

  }

  // procurar endereço por CEP
  useEffect(() => {
    if (cep.length === 9) {
      let c = cep.split("-").join("");

      axios.get(`https://brasilapi.com.br/api/cep/v2/${c}`)
        .then(res => {
          // console.log(res.data);
          setValue(CYCLIST_SCHEMA.CITY, res.data.city, { shouldDirty: true });
          setValue(CYCLIST_SCHEMA.STATE, res.data.state, { shouldDirty: true });
          setValue(CYCLIST_SCHEMA.STREET, res.data.street, { shouldDirty: true });
          setIsAddressEditable(false);
        }).catch(err => {
          console.log(err);
          toast({
            title: `CEP`,
            description: "Não foi possível encontrar o endereço do CEP fornecido",
            status: 'info',
            isClosable: true,
            position: "top"
          })
        })
    } else {
      setIsAddressEditable(true);
    }
  }, [cep]);

  return (
    <Flex as="form" direction='column' onSubmit={handleSubmit(handleCyclistSubmit)}>
      <Flex
        direction="column"
        gridGap="4"
        bgColor="brand.yellow"
        rounded="3xl"
        p="8"
      >
        <Input
          name={CYCLIST_SCHEMA.NAME}
          id={CYCLIST_SCHEMA.NAME}
          {...register(CYCLIST_SCHEMA.NAME)}
          error={errors.name}

          type="text"

          label="Nome completo"
        />

        <SimpleGrid
          minChildWidth="250px"
          gridGap="4"
          columns={2}
        >

          <Input
            name={CYCLIST_SCHEMA.CPF}
            id={CYCLIST_SCHEMA.CPF}
            {...register(CYCLIST_SCHEMA.CPF)}
            error={errors.cpf}

            type="text"

            label="CPF"
            placeholder="999.999.999-99"
            onChange={(event) =>
              setValue(CYCLIST_SCHEMA.CPF,
                mask(event.currentTarget.value, '999.999.999-99'),
                { shouldDirty: true, shouldValidate: true })
            }
          />

          <Input
            name={CYCLIST_SCHEMA.BIRTH_DATE}
            id={CYCLIST_SCHEMA.BIRTH_DATE}
            {...register(CYCLIST_SCHEMA.BIRTH_DATE)}
            error={errors.birthDate}

            type="date"

            label="Data de nascimento"
          />
        </SimpleGrid>

        <Input
          name={CYCLIST_SCHEMA.CEP}
          id={CYCLIST_SCHEMA.CEP}
          {...register(CYCLIST_SCHEMA.CEP)}
          error={errors.cep}

          type="text"

          label="CEP"
          placeholder="596XX-XXX"
          value={cep}

          onChange={(event) => {
            setCep(mask(
              unMask(event.currentTarget.value),
              '99999-999'
            ))
          }}
        />


        <SimpleGrid
          minChildWidth="200px"
          gridGap="4"
          templateColumns="1fr 120px"
        >
          <Input
            name={CYCLIST_SCHEMA.CITY}
            id={CYCLIST_SCHEMA.CITY}
            {...register(CYCLIST_SCHEMA.CITY)}
            error={errors.city}

            type="text"

            label="Cidade"
            isDisabled={!isAddressEditable}
          />

          <Input
            name={CYCLIST_SCHEMA.STATE}
            id={CYCLIST_SCHEMA.STATE}
            {...register(CYCLIST_SCHEMA.STATE)}
            error={errors.state}

            type="text"

            label="Estado"
            isDisabled={!isAddressEditable}
          />
        </SimpleGrid>

        <SimpleGrid
          minChildWidth="200px"
          gridGap="4"
          templateColumns="1fr 120px"
        >
          <Input
            name={CYCLIST_SCHEMA.STREET}
            id={CYCLIST_SCHEMA.STREET}
            {...register(CYCLIST_SCHEMA.STREET)}
            error={errors.street}

            type="text"
            label="Endereço"
            isDisabled={!isAddressEditable}
          />

          <Input
            name={CYCLIST_SCHEMA.NUMBER}
            id={CYCLIST_SCHEMA.NUMBER}
            {...register(CYCLIST_SCHEMA.NUMBER)}
            error={errors.number}

            type="text"
            label="Número"
          />
        </SimpleGrid>

        <Input
          name={CYCLIST_SCHEMA.EMAIL}
          id={CYCLIST_SCHEMA.EMAIL}
          {...register(CYCLIST_SCHEMA.EMAIL)}
          error={errors.email}

          label="E-mail"
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
        Realizar inscrição
      </Button>
    </Flex>
  )
}