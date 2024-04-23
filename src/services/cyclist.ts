import axios, { AxiosResponse } from "axios";
import { Cyclist } from "../models/cyclist";
import api from "./api";

interface DbCyclist {
  id: number,
  email: string,
  subscriptionId: string,
  name: string,
  cpf: string,
  birthDate: string,
  city?: string,
  state?: string,
  street: string,
  number: string,
  subscriptionConfirmation: boolean,
  hasReceivedKit: boolean
}

export function dbToModel(dbCyclist: DbCyclist): Cyclist {
  return {
    id: dbCyclist.id,
    email: dbCyclist.email,
    subscriptionId: dbCyclist.subscriptionId,
    name: dbCyclist.name,
    cpf: dbCyclist.cpf,
    birthDate: dbCyclist.birthDate,
    address: {
      city: dbCyclist.city,
      state: dbCyclist.state,
      street: dbCyclist.street,
      number: dbCyclist.number,
    },
    subscriptionConfirmation: dbCyclist.subscriptionConfirmation,
    hasReceivedKit: dbCyclist.hasReceivedKit
  }
}

export function modelToDb(cyclist: Cyclist): DbCyclist {
  return {
    id: cyclist.id,
    email: cyclist.email,
    subscriptionId: cyclist.subscriptionId,
    name: cyclist.name,
    cpf: cyclist.cpf,
    birthDate: cyclist.birthDate,
    city: cyclist.address.city,
    state: cyclist.address.state,
    street: cyclist.address.street,
    number: cyclist.address.number,
    subscriptionConfirmation: cyclist.subscriptionConfirmation,
    hasReceivedKit: cyclist.hasReceivedKit
  }
}

type IFindCyclists = {
  cyclists: Cyclist[],
  count: number
}

export const findCyclists = async (): Promise<IFindCyclists> => {
  const response: AxiosResponse<DbCyclist[]> = await api.get<DbCyclist[]>(`cyclists`);

  let cyclists: Cyclist[] = []
  let count: number = response.data.filter(cyclist => cyclist.subscriptionConfirmation).length

  for (let newCyclist of response.data) {
    cyclists.push(dbToModel(newCyclist))
  }
  return { cyclists, count }
}

export const getCyclistSubscriptionsCount = async (): Promise<number> => {
  const response: AxiosResponse<number> = await api.get<number>(`countCompetitors`);

  let count: number = response.data

  return count
}

// export const findCyclist = async (id: number): Promise<Cyclist | null> => {

//   if (id === null || id <= 0) {
//     throw new IndexException(id, "findCyclist", "CyclistService")
//   } else {

//     let cyclist: Cyclist = null;

//     const response: AxiosResponse<DbCyclist> = await api.get<DbCyclist>(`cyclists/${id}`);

//     if (response.status <= 300) {
//       cyclist = dbToModel(response.data)

//       cyclist.photo.localUrl = await getUrlFileFromServer(cyclist.photo.downloadUri)

//     }

//     return cyclist
//   }
// }

export const createCyclist = async (cyclist: Cyclist): Promise<Cyclist> => {

  let newCyclist: Cyclist = cyclist;
  const createCyclistForm = new FormData();

  let dbCyclist = modelToDb(newCyclist)

  delete dbCyclist.id

  const response: AxiosResponse<DbCyclist> = await api.post<DbCyclist>('/saveCadastro', dbCyclist)

  newCyclist = dbToModel(response.data)

  return newCyclist
}