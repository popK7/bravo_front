<script setup>
import advantageForm from "@/views/paies/forms/add.vue"
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const form = reactive({
    id: route.query.id,
    name: route.query.name,
    description: route.query.description
})

const isSnackbarTopVisible = ref(false)
const snackbarText = ref(null);

const handleSave = function (data) {
  snackbarText.value = `L'avantage ${data.name} a bien été modifié`;
  isSnackbarTopVisible.value = true;
};

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
              <advantage-form :form="form" @save="handleSave"/>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
      <!-- alert notification -->
      <VSnackbar v-model="isSnackbarTopVisible" location="top">
          {{snackbarText}}
      </VSnackbar>
  </div>
</template>
