<script setup>
import siteForm from "@/views/account/forms/positionForm.vue"
const props = defineProps({
  fom: {
    type: Object,
    default: () => {}
  }
});
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
              <site-form :data="props.form"></site-form>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
  </div>
</template>
