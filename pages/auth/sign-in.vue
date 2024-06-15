<template>
  <div class="sign-in-page">
    <div class="sign-in-card">
      <div class="sign-in-title">Sign In</div>
      <div class="sign-in-subtitle">Welcome to Inspect Pro</div>

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
        <v-btn
          :disabled="!valid"
          color="primary"
          elevation="0"
          height="45"
          block
          @click="validate"
        >
          Sign In
        </v-btn>

        <div class="sign-in-forgot">
          <nuxt-link
            to="/auth/forgot-password"
            class="custom-nuxt-link error--text"
          >
            Forgot password ?
          </nuxt-link>
        </div>

        <div class="divider">OR</div>

        <div class="sign-up-link body-2">
          Don't have an account?
          <nuxt-link to="/auth/sign-up">Sign Up for Free Try</nuxt-link>
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
    }
  },

  head() {
    return {
      title: 'Sign In',
    }
  },

  methods: {
    validate() {
      if (this.$refs.formSignIn.validate()) {
        this.onSignIn()
      }
    },

    onSignIn() {},
  },
}
</script>

<style scoped>
.sign-in-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e3f2fd;
  padding: 16px;
}

.sign-in-card {
  width: 100%;
  max-width: 450px;
  padding: 48px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

.sign-in-title {
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 12px;
}

.sign-in-subtitle {
  text-align: center;
  margin-bottom: 32px;
  color: #888;
}

.sign-in-forgot {
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
  .sign-in-card {
    padding: 32px;
  }
}

@media (max-width: 480px) {
  .sign-in-page {
    padding: 0;
    background-color: #ffffff;
  }

  .sign-in-card {
    padding: 24px;
    box-shadow: none;
  }

  .sign-in-title {
    font-size: 18px;
  }

  .sign-in-subtitle {
    margin-bottom: 16px;
  }
}
</style>
