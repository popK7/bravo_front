<script setup>
import siteForm from "@/views/account/forms/SiteForm.vue"
const props = defineProps({
  form: {
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
              <site-form :name="props.form.name"></site-form>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
  </div>
</template>
