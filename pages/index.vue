<template>
  <section class="green" style="padding-top: 100px">
    <v-container>
      <div>
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil
          quos deserunt corrupti ea unde tempora ratione soluta nulla, deleniti
          praesentium consequatur inventore perferendis? A debitis eveniet illum
          dicta dolores!
        </p>
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
        <div>
          {{ $t('welcome') }}
        </div>
      </div>
      <v-card height="1200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        sequi nulla nobis officia. Facere quas id quae fugiat voluptate aliquam
        quasi officiis qui reprehenderit corrupti! At placeat reiciendis nulla
        nisi!
      </v-card>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lists: null,
    }
  },

  head() {
    return {
      title: 'Home',
    }
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
