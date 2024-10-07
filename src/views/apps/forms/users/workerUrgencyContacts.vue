<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'

const emit = defineEmits([
  'onSave'
]);
const name = ref('')
const email = ref('')
const refForm = ref()
const mobile = ref('')
const relationship = ref('')


const save = function() {
  refForm.value ?.validate().then(({ valid }) => {
    if(valid) {

      emit('onSave');
    }
  })
};
</script>

<template>
<VForm ref="refForm" @submit.prevent="save">
    <VRow>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Nom </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField v-model="name" placeholder="Nom" persistent-placeholder prepend-inner-icon="tabler-user" :rules="[requiredValidator]" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="email">Email </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField v-model="email" placeholder="E-mail" label="E-mail" persistent-placeholder prepend-inner-icon="tabler-mail" :rules="[requiredValidator, emailValidator]" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="email">Téléphone </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField v-model="mobile" placeholder="Téléphone" persistent-placeholder prepend-inner-icon="tabler-phone" :rules="[requiredValidator]" />
                </VCol>

            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="email">Rélation </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField v-model="relationship" type="text" placeholder="Rélaion" persistent-placeholder :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]" autocomplete="on" />

                </VCol>

            </VRow>
        </VCol>

        <VCol cols="12" class="d-flex justify-content-end">
            <VBtn type="submit" @click="refForm?.validate()">
                Erengistrer
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>

<style>
.justify-content-end {
    justify-content: flex-end;
}
</style>
