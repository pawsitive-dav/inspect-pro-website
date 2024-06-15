// plugins/crypto.js
import CryptoJS from 'crypto-js'

const secretKey = process.env.FRONTEND_SECRET_KEY

export function encrypt(data) {
  return CryptoJS.AES.encrypt(data, secretKey).toString()
}

export function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey)
  return bytes.toString(CryptoJS.enc.Utf8)
}
