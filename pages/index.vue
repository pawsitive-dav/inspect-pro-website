<template>
  <div>
    <section
      class="blue darken-1"
      style="padding-top: 150px; padding-bottom: 150px"
    >
      <v-container class="white--text">
        <div>
          <div class="title pb-4">BRILLIANCE IN EXECUTION</div>
          <div class="display-2 mb-4">Your sure stop place for best</div>
          <div class="display-2">
            theme ends here with
            <span class="blue--text text--darken-4">InspectPro</span>
          </div>
          <div class="py-6">
            InspectPro - Now you can use this admin template to design stunning
            dashboards that will wow your target viewers or users to no end.
          </div>
          <div class="mt-6">
            <v-btn large color="#2C6DC9" elevation="0" class="white--text">
              Sign Up for FREE Try!
            </v-btn>
          </div>
        </div>
      </v-container>
    </section>
    <section>
      <v-container>
        <UiCard height="1200px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          sequi nulla nobis officia. Facere quas id quae fugiat voluptate
          aliquam quasi officiis qui reprehenderit corrupti! At placeat
          reiciendis nulla nisi!
        </UiCard>
      </v-container>
    </section>
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
