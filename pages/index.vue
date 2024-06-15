<template>
  <div class="my-6">
    <div class="display-1 text-center mb-6">Welcome Page</div>
    <v-card max-width="500" class="mx-auto">
      <v-card-text>
        <div class="pb-4">My ID: {{ $socket.id }}</div>
        <v-text-field v-model="myMessage" label="Message"></v-text-field>
        <v-btn @click="sendMessage(myMessage)">Send Message</v-btn>
      </v-card-text>
    </v-card>

    <v-card max-width="500" class="mx-auto mt-6">
      <v-card-text>
        <div class="title pb-4">Online Users</div>
        <div v-for="(item, index) in onlineClients" :key="index" class="pa-4">
          {{ item.message }}
        </div>
      </v-card-text>
    </v-card>

    <v-card max-width="500" class="mx-auto mt-4">
      <v-card-title>Messages</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(message, index) in messages" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ message }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomName: 'Welcome',
      myMessage: '',
      messages: [],
      onlineClients: [],
    }
  },

  created() {
    this.$socket.emit('switchRoom', this.roomName)
    this.$socket.emit('getUsersInRoom', this.roomName, (users) => {
      users.forEach((userId) => {
        if (userId !== this.$socket.id) {
          this.onlineClients.push({
            id: userId,
            message: `User with ID ${userId}`,
          })
        }
      })
    })
  },

  mounted() {
    this.$socket.on('message', (message) => {
      this.messages.push(message)
    })

    this.$socket.on('userJoined', (userId) => {
      if (userId !== this.$socket.id) {
        this.onlineClients.push({
          id: userId,
          message: `User with ID ${userId}`,
        })
      }
    })

    this.$socket.on('userLeft', (userId) => {
      this.onlineClients = this.onlineClients.filter(
        (item) => item.id !== userId
      )
    })
  },

  beforeDestroy() {
    this.$socket.off('message')
    this.$socket.off('userJoined')
    this.$socket.off('userLeft')
  },

  methods: {
    sendMessage(message) {
      this.$socket.emit('message', { room: this.roomName, message })
      this.myMessage = ''
    },
  },
}
</script>
