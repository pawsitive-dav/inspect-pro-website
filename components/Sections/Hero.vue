<template>
  <section id="section-0">
    <v-container class="white--text">
      <v-row>
        <v-col cols="12" md="7">
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
        </v-col>
        <v-col cols="12" md="5">
          <div class="hero-image">
            <v-img
              :src="require('~/assets/images/hero-image.png')"
              aspect-ratio="1"
              width="400"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'SectionsHero',
}
</script>

<style scoped>
section {
  background-color: #3784dc;
  padding: 150px 0;
}
.hero-image {
  background-color: #00000007;
  border-radius: 24px;
  padding: 16px;
  width: fit-content;
}
</style>
