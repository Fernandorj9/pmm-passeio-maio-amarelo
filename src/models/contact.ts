
export type Contact = {
  name: string,
  email: string,
  cpf: string,
  message: string,
  type: string,
}

export function getNewContact(): Contact {
  return {
    name: "",
    email: "",
    cpf: "",
    message: "",
    type: "",
  }
}

export function isEmptyContact(cyclist: Contact): boolean {
  return cyclist === null || cyclist.name === "" || cyclist.email === ""
}

