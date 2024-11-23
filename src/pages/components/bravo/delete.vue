<script setup>
const isAccountDeactivated = ref(false);
const isConfirmDialogOpen = ref(false);
</script>

<template>
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

                            <VBtn :disabled="!isAccountDeactivated" color="error" class="mt-3" @click="isConfirmDialogOpen = true">
                                Supprimer le regime
                            </VBtn>
                        </VCol>
                    </VRow>
                </VCol>
            </VRow>
        </VForm>

</template>
