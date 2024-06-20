<template>
  <section id="section-contact-us">
    <v-container class="text-center">
      <div class="body-2 primary--text mb-2">CONTACT US</div>
      <div class="display-1 mb-2">
        Have any questions ? We would love to hear from you.
      </div>
      <div class="body-1 grey--text">
        You can contact us anytime regarding any queries or deals,dont hesitate
        to clear your doubts before trying our product.
      </div>

      <v-row class="mt-9">
        <v-col cols="12" md="6">
          <div
            style="
              position: relative;
              width: 100%;
              padding-bottom: 56.25%;
              height: 0;
              overflow: hidden;
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.4203786724649!2d100.5140352677548!3d13.714954894526661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298c71f48557b%3A0x99603575187b616c!2s62%2F40%20Charoen%20Krung%20Road%2C%20Khwaeng%20Yan%20Nawa%2C%20Khet%20Sathon%2C%20Krung%20Thep%20Maha%20Nakhon%2010120!5e0!3m2!1sen!2sth!4v1718880573856!5m2!1sen!2sth"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 0;
              "
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-card color="grey lighten-5" elevation="0" class="pa-6">
            <v-form
              ref="formContact"
              v-model="contactForm.valid"
              lazy-validation
            >
              <v-row>
                <v-col cols="12" md="6" class="py-0">
                  <UiLabel for="firstName">First Name:</UiLabel>
                  <v-text-field
                    v-model="contactForm.firstName"
                    :rules="[(v) => !!v || 'First Name is required']"
                    name="firstName"
                    placeholder="Enter first name."
                    outlined
                    required
                  />
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <UiLabel for="lastName">Last Name:</UiLabel>
                  <v-text-field
                    v-model="contactForm.lastName"
                    :rules="[(v) => !!v || 'Last Name is required']"
                    name="lastName"
                    placeholder="Enter last name."
                    outlined
                    required
                  />
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <UiLabel for="phoneNumber">Phone Number:</UiLabel>
                  <v-text-field
                    v-model="contactForm.phoneNumber"
                    :rules="[(v) => !!v || 'Phone Number is required']"
                    name="phoneNumber"
                    placeholder="Enter phone number."
                    outlined
                    required
                  />
                </v-col>
                <v-col cols="12" md="6" class="py-0">
                  <UiLabel for="email">Email:</UiLabel>
                  <v-text-field
                    v-model="contactForm.email"
                    :rules="[(v) => !!v || 'Email is required']"
                    name="email"
                    placeholder="Enter email."
                    outlined
                    required
                  />
                </v-col>
                <v-col cols="12" class="py-0">
                  <UiLabel for="message">
                    Message: <span class="grey--text">(optional)</span>
                  </UiLabel>
                  <v-textarea
                    v-model="contactForm.message"
                    name="message"
                    rows="2"
                    outlined
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-btn
                :disabled="!contactForm.valid"
                large
                color="primary"
                elevation="0"
                class="mt-4"
                @click="validate"
              >
                Send Message
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'SectionsContactUs',

  data() {
    return {
      contactForm: {
        valid: false,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '',
      },
    }
  },

  methods: {
    validate() {
      if (this.$refs.formContact.validate()) {
        console.log('Call API')
      }
    },
  },
}
</script>

<style scoped>
section {
  padding: 80px 0;
}
</style>
