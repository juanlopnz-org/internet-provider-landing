export const spacingWhatsAppNumber = (number: string) => {
  const newNumber = number.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
  return newNumber;
}