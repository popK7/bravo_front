<script setup>
import departementForm from "@/views/account/forms/DepartmentForm.vue"
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
              <departement-form />
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
  </div>
</template>
