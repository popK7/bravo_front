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
              <h4>Général</h4>
            </template>
            <VCardText>
              <site-form :name="props.form.name"></site-form>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
  </div>
</template>
