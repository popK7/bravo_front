<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
const router = useRouter();

const isAccountDeactivated = ref(false);
const isSpinnerVisible = ref(false);
const isAlertVisible = ref(false);
const alertText = ref('');

const cotisationId = route.query.id
const regimeName= route.query.name

const removeCotisation = function() {
  isSpinnerVisible.value = true;

  setTimeout(() => {
    alertText.value = `Le regime d'absence ${regimeName} a bien été supprimée`;
    isSpinnerVisible.value = false;
    isAlertVisible.value = true;
    // router.push('/settings/cotisations/employees')
  }, 2000);
};
</script>

<template>
  <div>
    <VCard>
    <template #title>
        <h3 class="mb-2">Suppresion</h3>
    </template>
    <VCardText>
        <VForm @submit.prevent="() => {}">
            <VRow>
                <VCol cols="12">
                    <VRow no-gutters>
                        <!-- 👉 First Name -->
                        <VCol cols="12">
                            <!-- 👉 Delete Account -->
                            <!-- 👉 Checkbox and Button  -->
                            <div>
                                <VCheckbox v-model="isAccountDeactivated" :rules="validateAccountDeactivation" label="Je confirme la suppression du régime" />
                            </div>

                            <VBtn :disabled="!isAccountDeactivated" color="error" class="mt-3" @click="removeCotisation">
                                Supprimer le regime
                                <VProgressCircular :size="20" width="3" color="" indeterminate class="ml-2" v-if="isSpinnerVisible" />
                            </VBtn>
                        </VCol>
                    </VRow>
                </VCol>
            </VRow>
        </VForm>
    </VCardText>
</VCard>
    <!-- alert notification -->
    <VSnackbar v-model="isAlertVisible" location="top" color="red">
        {{alertText}}
    </VSnackbar>
  </div>
</template>
