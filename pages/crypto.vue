<template>
  <div>
    <UiLabel>Test a message</UiLabel>
    <v-text-field v-model="message" placeholder="Enter a message" outlined />
    <div class="flex my-4">
      <v-btn @click="encryptMessage">Encrypt</v-btn>
      <v-btn @click="decryptMessage">Decrypt</v-btn>
    </div>
    <v-card class="pa-4" outlined>
      <span>Encrypted: {{ encryptedMessage }}</span>
    </v-card>
    <v-card class="pa-4" outlined>
      <span>Decrypted: {{ decryptedMessage }}</span>
    </v-card>
  </div>
</template>

<script>
import { encrypt, decrypt } from '~/plugins/crypto'

export default {
  data() {
    return {
      message: '',
      encryptedMessage: '',
      decryptedMessage: '',
    }
  },
  methods: {
    encryptMessage() {
      this.encryptedMessage = encrypt(this.message)
    },
    decryptMessage() {
      this.decryptedMessage = decrypt(this.encryptedMessage)
    },
  },
}
</script>
