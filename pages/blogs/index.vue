<template>
  <v-container style="padding-top: 100px">
    <div>Blog Page</div>
    <v-row>
      <v-col v-for="blog in blogs" :key="blog.id" cols="3">
        <UiCard>
          <v-img
            src="https://projects.spruko.com/nuxt/ynex/preview/images/media/media-36.jpg"
          >
          </v-img>
          <div>
            <div class="grey--text text--darken-3">
              <b>{{ blog.title }}</b>
            </div>
            <div>
              {{ blog.content }}
            </div>
            <v-btn elevation="0" class="mt-4">อ่านต่อ</v-btn>
            <v-divider class="my-4" />
          </div>
        </UiCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      blogs: null,
    }
  },

  async mounted() {
    await this.fetchBlogs()
  },

  methods: {
    async fetchBlogs() {
      try {
        const response = await this.$axios.get('/posts')
        this.blogs = response.data
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    },
  },
}
</script>
