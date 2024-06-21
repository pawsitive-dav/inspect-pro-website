<template>
  <div>
    <SectionsHero />

    <SectionsScope
      section-id="section-1"
      color="#FAFAFA"
      topic="STATISTICS"
      title="More than 120+ projects completed."
      description="We are proud to have top class clients and customers,which motivates us to work more on projects."
    >
      <v-row class="mt-6">
        <v-col v-for="(item, index) in 4" :key="index" cols="6" md="3">
          <v-card outlined>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde
              fugit, beatae aspernatur quam saepe. Nobis quibusdam veritatis
              ratione ipsa tenetur libero nostrum quisquam expedita inventore
              harum, recusandae ab consectetur.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </SectionsScope>

    <SectionsScope
      section-id="section-2"
      topic="CUSTOMIZATION"
      title="Designed with precision and well documented"
      description="ynex comes with multiple customization options that are very easy to implement."
    >
      <v-row class="mt-6">
        <v-col cols="12" md="6">
          <v-card outlined>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde
              fugit, beatae aspernatur quam saepe. Nobis quibusdam veritatis
              ratione ipsa tenetur libero nostrum quisquam expedita inventore
              harum, recusandae ab consectetur.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card outlined>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde
              fugit, beatae aspernatur quam saepe. Nobis quibusdam veritatis
              ratione ipsa tenetur libero nostrum quisquam expedita inventore
              harum, recusandae ab consectetur.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </SectionsScope>

    <SectionsScope
      section-id="section-3"
      color="#FAFAFA"
      topic="our feature"
      title="Our mission consists of 8 major steps."
      description="Our mission is to make web design easy, so you can focus on building your brand."
    >
      <v-row class="mt-6">
        <v-col
          v-for="(item, index) in 8"
          :key="'feature' + index"
          cols="6"
          md="3"
        >
          <UiCard class="pa-6">
            <div class="body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde
              fugit, beatae aspernatur quam saepe. Nobis quibusdam veritatis
              ratione ipsa tenetur libero nostrum quisquam expedita inventore
              harum, recusandae ab consectetur.
            </div>
          </UiCard>
        </v-col>
      </v-row>
    </SectionsScope>

    <SectionsScope
      section-id="contact-section"
      topic="contact us"
      title="Have any questions ? We would love to hear from you."
      description="You can contact us anytime regarding any queries or deals,dont hesitate
        to clear your doubts before trying our product."
    >
      <SectionsContactUs />
    </SectionsScope>
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
