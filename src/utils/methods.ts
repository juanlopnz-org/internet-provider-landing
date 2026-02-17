import { whatsAppNumber } from "./constants"

export function redirectToWhatsApp(
  phone: string = whatsAppNumber,
  message: string
) {
  const encodedMessage = encodeURIComponent(message)
  const url = `https://wa.me/57${phone}?text=${encodedMessage}`

  window.open(url, '_blank')
}
