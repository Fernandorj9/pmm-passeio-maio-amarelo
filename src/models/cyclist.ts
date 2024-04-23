
export type Cyclist = {
  id: number,
  subscriptionConfirmation: boolean,
  hasReceivedKit: boolean
  subscriptionId: string,
  name: string,
  email: string,
  cpf: string,
  birthDate: string,
  address: {
    city?: string,
    state?: string,
    street: string,
    number: string,
  },
}

export function getNewCyClist(): Cyclist {
  return {
    id: 0,
    email: "",
    name: "",
    subscriptionId: "",
    cpf: "",
    birthDate: "",
    address: {
      city: "Mossoró",
      state: "RN",
      street: "",
      number: "",
    },
    subscriptionConfirmation: false,
    hasReceivedKit: false
  }
}

export function isEmptyCyclist(cyclist: Cyclist): boolean {
  return cyclist === null || cyclist.name === "" || cyclist.email === ""
}

