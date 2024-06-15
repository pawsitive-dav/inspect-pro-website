<template>
  <div class="sign-up-page">
    <div class="sign-up-card">
      <div class="sign-up-title">Welcome</div>
      <div class="sign-up-subtitle">
        Join us by creating a free trial account!
      </div>

      <v-form ref="formSignIn" v-model="valid" lazy-validation>
        <UiLabel for="username">User Name</UiLabel>
        <v-text-field
          v-model="username"
          :rules="[(v) => !!v || 'User Name is required']"
          name="username"
          placeholder="Enter your user name."
          outlined
          required
        />

        <UiLabel for="password">Password</UiLabel>
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[(v) => !!v || 'Password is required']"
          :type="showPassword ? 'text' : 'password'"
          name="password"
          placeholder="Enter your password."
          outlined
          required
          @click:append="showPassword = !showPassword"
        />

        <div class="d-flex body-2 align-center my-4">
          <v-checkbox
            v-model="agreeStatus"
            :rules="[(v) => !!v]"
            class="ma-0 pa-0"
            hide-details
            required
          />
          <div>
            By creating a account you agree to our
            <a href="#">Terms & Conditions</a> and
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <v-btn
          :disabled="!valid"
          color="primary"
          elevation="0"
          height="45"
          block
          @click="validate"
        >
          Sign Up
        </v-btn>

        <div class="sign-up-link body-2">
          Already have an account?
          <nuxt-link to="/auth/sign-in">Sign In</nuxt-link>
        </div>

        <div class="divider">OR</div>

        <div class="mt-4 text-center">
          <v-btn small elevation="0">Select plan & get started</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',

  data() {
    return {
      valid: false,
      username: '',
      password: '',
      showPassword: false,
      agreeStatus: false,
    }
  },

  head() {
    return {
      title: 'Sign Up',
    }
  },

  methods: {
    validate() {
      if (this.$refs.formSignIn.validate()) {
        this.onSignUp()
      }
    },

    onSignUp() {},
  },
}
</script>

<style scoped>
.sign-up-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e3f2fd;
  padding: 16px;
}

.sign-up-card {
  width: 100%;
  max-width: 450px;
  padding: 48px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

.sign-up-title {
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 12px;
}

.sign-up-subtitle {
  text-align: center;
  margin-bottom: 32px;
  color: #888;
}

.sign-up-forgot {
  text-align: center;
  font-size: 14px;
  margin-top: 24px;
}

.custom-nuxt-link {
  text-decoration: none;
}

.sign-up-link {
  text-align: center;
  margin-top: 15px;
  color: #888;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 18px 0;
  color: #bdbdbd;
  font-size: 14px;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e0e0e0;
}

.divider:not(:empty)::before {
  margin-right: 0.25em;
}

.divider:not(:empty)::after {
  margin-left: 0.25em;
}

@media (max-width: 768px) {
  .sign-up-card {
    padding: 32px;
  }
}

@media (max-width: 480px) {
  .sign-up-page {
    padding: 0;
    background-color: #ffffff;
  }

  .sign-up-card {
    padding: 24px;
    box-shadow: none;
  }

  .sign-up-title {
    font-size: 18px;
  }

  .sign-up-subtitle {
    margin-bottom: 16px;
  }
}
</style>
