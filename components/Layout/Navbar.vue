<template>
  <div :class="['layout-navbar', { scrolled: isScrolled }]">
    <v-container class="pa-0">
      <div class="navbar">
        <div>LOGO</div>
        <v-spacer />
        <div>
          <v-btn elevation="0">Sign In</v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'LayoutNavbar',
  data() {
    return {
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0
    },
  },
}
</script>

<style scoped>
.layout-navbar {
  position: fixed;
  z-index: 20;
  top: 0;
  width: 100%;
  height: 75px;
  background-color: #ffffff0e;
  transition: all ease 0.3s;
}
.layout-navbar.scrolled {
  background-color: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.navbar {
  display: flex;
  align-items: center;
  height: 75px;
}
</style>
