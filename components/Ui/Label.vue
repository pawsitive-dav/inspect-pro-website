<template>
  <div class="ui-label grey--text text--darken-3">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiLabel',
}
</script>

<style scoped>
.ui-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  width: fit-content;
  margin-bottom: 8px;
}
</style>
