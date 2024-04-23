import { FieldValues } from 'react-hook-form'
import * as yup from 'yup'

export const cyclistFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório").length(14, "Entre com um CPF válido"),
  cep: yup.string().required("CEP é obrigatório").length(9, "Entre com um CEP válido"),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  birthDate: yup.date()
    .required("Data de nascimento da aluna ou aluno é obrigatória")
    .nullable()
    .typeError('Valor não aceito. Altere a data de nascimento da aluna ou aluno.')
  ,
  city: yup.string().optional().nullable(),
  state: yup.string().optional().nullable(),
  street: yup.string().required("Nome da rua é obrigatório"),
  number: yup.string().required("Número da rua é obrigatório"),
})

export enum CYCLIST_SCHEMA {
  EMAIL = "email",
  NAME = 'name',
  CPF = 'cpf',
  BIRTH_DATE = "birthDate",
  CITY = "city",
  CEP = "cep",
  STATE = "state",
  STREET = "street",
  NUMBER = "number",
}

export interface ICyclistFormFields extends FieldValues {
  name: string,
  email: string,
  cpf: string,
  birthDate: string,
  city?: string,
  state?: string,
  street: string,
  number: string,
}
