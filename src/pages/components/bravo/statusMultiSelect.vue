<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
];
</script>

<template>
  <div class="multi-status">
    <AppAutocomplete
    :items="items"
    placeholder="Choisir des status"
    chips
    multiple
    closable-chips
  />
  </div>

</template>

<style scoped>
  .multi-status { 
    width: 7cm;;
  }
</style>
