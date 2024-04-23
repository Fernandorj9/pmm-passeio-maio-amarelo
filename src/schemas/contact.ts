import { FieldValues } from 'react-hook-form'
import * as yup from 'yup'
import { CONTACT_TYPE } from '../models/enums/contactType'
import { convertEnumToArray } from '../utils/enumToArray'

export const contactFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório").length(14, "Entre com um CPF válido"),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  message: yup.string().required("Mensagem obrigatória"),
  type: yup.string()
    .required("Tipo do contato é obrigatório")
    .oneOf(convertEnumToArray(CONTACT_TYPE).map(type => type.value), "insira um valor válido para o tipo"),
})

export enum CONTACT_SCHEMA {
  NAME = 'name',
  EMAIL = "email",
  CPF = 'cpf',
  MESSAGE = "message",
  TYPE = "type",
}

export interface IContactFormFields extends FieldValues {
  name: string,
  email: string,
  cpf: string,
  message: string,
  type: string,
}
