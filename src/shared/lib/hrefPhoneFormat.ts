import { onlyDigit } from './onlyDigit'

export const hrefPhoneFormat = (str: string) => {
  const plus = str[0] === '+' ? '+' : ''
  return `tel:${plus}${onlyDigit(str)}`
}
