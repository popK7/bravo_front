<script setup>
import {
    requiredValidator,
} from '@validators'

import RateWithoutSliceForm from "../forms/rateWithoutSlices.vue";
import RateWithSliceForm from "../forms/rateWithSlices.vue";

const emit = defineEmits([
    'save',
])

const props = defineProps({
    form: {
        type: Object,
        default: () => {}
    },

});

const isFormValid = ref(false)
const refForm = ref()
const name = ref(props.form ?.name ?? '')
const rate = ref(props.form ?.rate ?? '')
const limit = ref(props.form ?.limit ?? '')
const slices = ref(1)
const description = ref(props.form ?.description ?? '');
const handleSubmit = ref(false)
const toggleTranche = ref(false)

// submit form
const onSubmit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
            handleSubmit.value = true;
            let data = {
                'name': name.value,
                'rate': rate.value,
                'limit': limit.value,
                'description': description.value,
                'cotisation_type': 2 // Employee cotisation
            }
            setTimeout(() => {
                emit('save', data)
                handleSubmit.value = false;
                nextTick(() => {
                    refForm.value ?.reset()
                    refForm.value ?.resetValidation()
                })

            }, 4000);
        }

    })
};
// add rate slice
const addSliceRate = function () {
    slices.value += 1;
}
// remove rate slice element
const remove = function (e) {
    console.log(e);
};
</script>
<template>
<!-- 👉 Form -->
<VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
    <VRow>
        <!-- 👉 name -->
        <VCol cols="12">
            <AppTextField v-model="name" :rules="[requiredValidator]" label="Nom" placeholder="Nom du site" />
        </VCol>

        <!-- 👉 Rate -->
        <VCol cols="12">
            <VSwitch v-model="toggleTranche" label="Taux par tranches?" />
        </VCol>
        <VCol cols="12" v-if="!toggleTranche">
            <rate-without-slice-form />
        </VCol>

        <VCol cols="12" v-if="toggleTranche">
            <rate-with-slice-form v-for="index in slices" :key="index" :ref="`race_${index}`" :indice="slices" @on-remove="remove" />
            <VRow>
                <VCol md="12" lg="12" class="d-flex justify-content-end">
                    <VBtn color="info" size="x-small" class="mt-3" @click="addSliceRate">
                        Ajouter
                    </VBtn>
                </VCol>
            </VRow>

        </VCol>
        <!-- 👉 Description -->
        <VCol cols="12">
            <AppTextarea label="Description" placeholder="Déscription" v-model="description" />
        </VCol>

        <!-- 👉 Submit and Cancel -->
        <VCol cols="12">
            <VBtn type="submit" class="me-3">
                Enregistrer
                <VProgressCircular :size="20" width="3" color="" indeterminate class="ml-2" v-if="handleSubmit" />
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>

<style>
.justify-content-end {
    justify-content: end;
}
</style>
