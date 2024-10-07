<script setup>
import profileForm from "./forms/AccountProfileForm.vue"
</script>
<template>
  <VCard>
    <template #title>
      <h4>Information générale</h4>
    </template>
    <VCardText>
      <profile-form></profile-form>
    </VCardText>
  </VCard>
</template>
