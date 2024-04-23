export enum CONTACT_TYPE {
  SUPPORT = "suporte",
  QUESTION = "duvida",
  SUGGEST = "sugestao",
}

export function getUserTypeByValue(value: string): CONTACT_TYPE {
  switch (value) {
    case CONTACT_TYPE.SUPPORT:
      return CONTACT_TYPE.SUPPORT
      break;
    case CONTACT_TYPE.QUESTION:
      return CONTACT_TYPE.QUESTION
      break;
    default:
      return CONTACT_TYPE.SUGGEST
  }
}