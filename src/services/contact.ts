import axios, { AxiosResponse } from "axios";
import { Contact } from "../models/contact";
import api from "./api";

interface DbContact {
  email: string,
  name: string,
  cpf: string,
  message: string,
  type: string
}

export function dbToModel(dbContact: DbContact): Contact {
  return {
    email: dbContact.email,
    name: dbContact.name,
    cpf: dbContact.cpf,
    message: dbContact.message,
    type: dbContact.type
  }
}

export function modelToDb(contact: Contact): DbContact {
  return {
    email: contact.email,
    name: contact.name,
    cpf: contact.cpf,
    message: contact.message,
    type: contact.type
  }
}

// export const findContacts = async (page: number = PAGE_INIT, size: number = PAGE_SIZE, sort: ORDER = PAGE_SORT): Promise<Contact[]> => {
//   const response: AxiosResponse<Page<DbContact>> = await api.get<Page<DbContact>>(`contacts?page=${page}&size=${size}&sort=${sort}`);

//   let newContacts: Contact[] = []

//   for (let newAdmin of response.data.content) {
//     newContacts.push(dbToModel(newAdmin))
//   }
//   return newContacts
// }

// export const findContact = async (id: number): Promise<Contact | null> => {

//   if (id === null || id <= 0) {
//     throw new IndexException(id, "findContact", "ContactService")
//   } else {

//     let contact: Contact = null;

//     const response: AxiosResponse<DbContact> = await api.get<DbContact>(`contacts/${id}`);

//     if (response.status <= 300) {
//       contact = dbToModel(response.data)

//       contact.photo.localUrl = await getUrlFileFromServer(contact.photo.downloadUri)

//     }

//     return contact
//   }
// }

export const createContact = async (contact: Contact): Promise<Contact> => {

  let newContact: Contact = contact;
  const createContactForm = new FormData();

  let dbContact = modelToDb(newContact)

  const response: AxiosResponse<DbContact> = await api.post<DbContact>('/saveContact', dbContact)

  newContact = dbToModel(response.data)

  return newContact
}