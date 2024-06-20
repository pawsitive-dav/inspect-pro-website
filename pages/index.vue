<template>
  <div>
    <SectionsHero />

    <section id="section-1">
      <v-container>
        <v-sheet height="400" class="py-9">
          <div class="title">Header</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            sequi nulla nobis officia. Facere quas id quae fugiat voluptate
            aliquam quasi officiis qui reprehenderit corrupti! At placeat
            reiciendis nulla nisi!
          </p>
        </v-sheet>
      </v-container>
    </section>

    <section id="section-2" class="grey lighten-5">
      <v-container>
        <v-sheet color="transparent" height="400" class="py-9">
          <div class="title">Header</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            sequi nulla nobis officia. Facere quas id quae fugiat voluptate
            aliquam quasi officiis qui reprehenderit corrupti! At placeat
            reiciendis nulla nisi!
          </p>
        </v-sheet>
      </v-container>
    </section>

    <section id="section-3">
      <v-container>
        <v-sheet height="400" class="py-9">
          <div class="title">Header</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            sequi nulla nobis officia. Facere quas id quae fugiat voluptate
            aliquam quasi officiis qui reprehenderit corrupti! At placeat
            reiciendis nulla nisi!
          </p>
        </v-sheet>
      </v-container>
    </section>

    <SectionsContactUs />
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
