<template>
  <div :class="['ui-card', { outlined }]" :style="cardStyles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiCard',
  props: {
    width: {
      type: String,
      default: null,
    },
    minWidth: {
      type: String,
      default: null,
    },
    maxWidth: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
    minHeight: {
      type: String,
      default: null,
    },
    maxHeight: {
      type: String,
      default: null,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cardStyles() {
      return {
        width: this.width,
        minWidth: this.minWidth,
        maxWidth: this.maxWidth,
        height: this.height,
        minHeight: this.minHeight,
        maxHeight: this.maxHeight,
      }
    },
  },
}
</script>

<style scoped>
.ui-card {
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease, border 0.3s ease;
}

.ui-card.outlined {
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
