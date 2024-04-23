export type EnumMap = {
  key: string,
  value: any
}

export function convertEnumToArray(enumMap): EnumMap[] {

  const arrayObjects: EnumMap[] = []

  for (const [propertyKey, propertyValue] of Object.entries(enumMap)) {
    if (!Number.isNaN(Number(propertyKey))) {
      continue;
    }
    arrayObjects.push({ key: propertyKey, value: propertyValue });
  }

  return arrayObjects;
}