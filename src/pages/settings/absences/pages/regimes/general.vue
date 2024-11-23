<script setup>
import regimeForm from "@/views/absences/forms/regimes.vue"
</script>
<template>
  <div>
      <VRow>
        <VCol cols="12" md="12">
          <VCard>
            <template #title>
              <h3>Général</h3>
            </template>
            <VCardText>
              <regime-form></regime-form>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
  </div>
</template>
