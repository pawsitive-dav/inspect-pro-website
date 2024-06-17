<template>
  <div>
    <h1>Home Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil quos
      deserunt corrupti ea unde tempora ratione soluta nulla, deleniti
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
