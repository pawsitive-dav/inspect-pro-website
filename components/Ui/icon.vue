<template>
  <v-img
    :src="require(`~/assets/icons/outline/${name}.svg`)"
    :width="small ? '20' : '24'"
    aspect-ratio="1"
  />
</template>

<script>
export default {
  name: 'UiIcon',
  props: {
    name: {
      type: String,
      default: 'home',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
