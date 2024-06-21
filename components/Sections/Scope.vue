<template>
  <section :id="sectionId" :style="{ backgroundColor: backgroundColor }">
    <v-container>
      <div class="mb-6 text-center">
        <div class="body-1 text-uppercase primary--text">{{ topic }}</div>
        <div class="display-1 mt-3 mb-2">{{ title }}</div>
        <div class="grey--text">{{ description }}</div>
      </div>
      <slot />
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'SectionsScope',

  props: {
    sectionId: {
      type: String,
      default: () => Date.now().toString(),
    },
    color: {
      type: String,
      default: '#FFFFFF',
    },
    topic: {
      type: String,
      default: 'section',
    },
    title: {
      type: String,
      default: 'this is section title',
    },
    description: {
      type: String,
      default: 'Description content mockup.',
    },
  },
  computed: {
    backgroundColor() {
      return this.color
    },
  },
}
</script>

<style scoped>
section {
  padding: 100px 0;
}
</style>
