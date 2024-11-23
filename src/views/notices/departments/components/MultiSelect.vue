<script setup>

const props = defineProps({
  resource_title: {
    type: String,
    default: "departements"
  }
})

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
  <div class="container-width">
     <!-- 👉 resources -->
     <VCol cols="12">
          <AppAutocomplete
            chips
            multiple
            :items="items"
            :placeholder="`Choisir ${props.resource_title}`"
          />
        </VCol>
  </div>
</template>

<style>
  .container-width {
    width: 7cm;
  }
</style>
