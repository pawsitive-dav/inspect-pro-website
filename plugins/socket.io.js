// plugins/socket.io.js
import { io } from 'socket.io-client'

export default ({ store }, inject) => {
  const socket = io('http://localhost:8080')

  //   socket.on('connect', () => {
  //     console.log(`Connected with socket ID: ${socket.id}`)
  //   })

  //   socket.on('message', (message) => {
  //     console.log('New message:', message)
  //   })

  inject('socket', socket)
}
