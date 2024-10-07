<script setup>
import languesDevises from "./forms/languesDevisesForm.vue"
</script>
<template>
  <VCard>
    <template #title>
      <h4>Langues et devises</h4> 
    </template>
    <VCardText>
      <langues-devises></langues-devises>
    </VCardText>
  </VCard>
</template>
