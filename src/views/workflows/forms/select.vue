<script setup>
  const categories = [
    "Admin",
    "Employé",
    "Chef d'équipe",
  ];
</script>

<template>
  <AppAutocomplete
    label="Fonction"
    :items="categories"
    placeholder="Choisir une fonction"
  />
</template>
