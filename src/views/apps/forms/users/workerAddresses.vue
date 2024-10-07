<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'

const address = ref('')
const city = ref('')
const refForm = ref()
const country = ref()
const region = ref('')

const postal_code = ref('')
const step = ref('')

const countries = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'];

const emit = defineEmits([
  'onSave'
])
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
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Numéro et rue </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField v-model="address" placeholder="Numéro et rue" persistent-placeholder :rules="[requiredValidator]" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Ville </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField v-model="city" placeholder="Ville" persistent-placeholder :rules="[requiredValidator]" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Region </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField v-model="region" type="text" placeholder="Région" persistent-placeholder :rules="[requiredValidator]" />

                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Code Postal </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField v-model="postal_code" type="text" placeholder="Code Postal" persistent-placeholder :rules="[requiredValidator]" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Pays </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppAutocomplete :items="countries" placeholder="Pays" v-model="country" :rules="[requiredValidator]"/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Etage </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField v-model="step" type="text" placeholder="Etage" persistent-placeholder />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" class="d-flex justify-content-end">
            <VBtn type="submit" @click="refForm?.validate()">
                Enregistrer
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
