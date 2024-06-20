<template>
  <v-footer color="grey darken-4" app absolute>
    <v-sheet min-width="100%" color="transparent">
      <v-container class="my-8 body-2 grey--text">
        <v-row>
          <v-col cols="12" md="6">
            <v-img
              :src="require('~/assets/logo/inspectpro-semi.svg')"
              width="200"
              class="mb-4"
            ></v-img>
            <v-sheet
              color="transparent"
              max-width="400"
              class="body-2 grey--text"
            >
              <div class="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit et magnam, fuga est mollitia eius, quo illum illo
                inventore optio aut quas omnis rem. Dolores accusantium
                aspernatur minus ea incidunt.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                ea esse ad
              </div>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="3">
            <div class="mb-4 title white--text">INFO</div>
            <ul>
              <li><a href="#section-0">FREE Try!</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Faq's</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </v-col>

          <v-col cols="12" md="3">
            <div class="mb-4 title white--text">CONTACT</div>
            <ul>
              <li>
                62/40 Charoen Krung Road, Yannawa Subdistrict, Sathorn District,
                Bangkok 10120
              </li>
              <li>info@inspect-pro.com</li>
              <li>About Us</li>
              <li>(+66) 62-325-8317</li>
              <li>(+66) 93-027-1716</li>
            </ul>
            <div
              class="grey--text text--lighten-1 body-1 font-weight-medium mt-4 mb-1"
            >
              FOLLOW US ON :
            </div>
            <div class="d-flex">
              <div class="social-line">LINE OA</div>
              <div class="social-fb">Facebook</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-divider dark />
      <v-container class="mt-4 mb-2 white--text body-2">
        <div class="text-center">
          Copyright &copy; {{ new Date().getFullYear() }} InspectPro. All rights
          reserved
        </div>
      </v-container>
    </v-sheet>
  </v-footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  padding: 4px 0;
}

ul li a {
  color: #9e9e9e;
  text-decoration: none;
}

ul li a:hover {
  color: #e0e0e0;
}

.social-fb {
  padding: 8px 12px;
  border-radius: 6px;
  background-color: #424242;
  cursor: pointer;
  margin-right: 8px;
  transition: all ease 0.5s;
}

.social-fb:hover {
  background-color: #0866ff;
  color: #ffffff;
}

.social-line {
  padding: 8px 12px;
  border-radius: 6px;
  background-color: #424242;
  cursor: pointer;
  margin-right: 8px;
  transition: all ease 0.5s;
}

.social-line:hover {
  background-color: #06c755;
  color: #ffffff;
}
</style>
