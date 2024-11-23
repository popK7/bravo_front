<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'
import { ref } from 'vue';

const props = defineProps({});
const emit = defineEmits(['save']);

const items = [
    'California',
    'Colorado',
    'Florida',
    'Georgia',
    'Texas',
    'Wyoming',
]

const num_if = ref(null)
const num_sc = ref(null)
const seek_assurance = ref()
const compagny_seek_assurance = ref(null)
const number_children = ref(0)
const refForm = ref();
const handleSubmit = ref(false)

const submit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
            handleSubmit.value = true;
            let response = {
              status: '200',
              message: "L'infomration a bien été modifiée",
              data: {
                'num_if': num_if.value,
                'num_sc': num_sc.value,
                'seek_assurance': seek_assurance.value,
                'compagny_seek_assurance': compagny_seek_assurance.value,
                'number_children': number_children.value,
                'type': 'regime'
            },
          }
            setTimeout(() => {
                emit('save', response)
                handleSubmit.value = false;
                nextTick(() => {
                    // refForm.value ?.reset()
                    // refForm.value ?.resetValidation()
                })

            }, 4000);
        }
    })
};
</script>

<template>
<div>
    <VForm ref="refForm" @submit.prevent="() => {}">
        <VRow>
            <VCol cols="12" md="12">
                <AppTextField v-model="num_if" placeholder="Numéro d'identification fiscale" persistent-placeholder :rules="[requiredValidator]" label="Numéro d'identification fiscale" />
            </VCol>

            <VCol cols="12" md="12">
                <AppTextField v-model="num_sc" placeholder="Numéro d'identification fiscale" persistent-placeholder :rules="[requiredValidator]" label="Numéro de sécurité sociale" />
            </VCol>

            <VCol cols="12" md="12">
                <AppAutocomplete v-model="seek_assurance" label="Type d'assurance maladie" placeholder="Type d'assurance maladie" :items="items"  eager />
            </VCol>

            <VCol cols="12" md="12">
                <AppTextField v-model="compagny_seek_assurance" placeholder="Compagnie d'assurance maladie" persistent-placeholder :rules="[requiredValidator]" label="Compagnie d'assurance maladie" />
            </VCol>

            <VCol cols="12" md="12">
                <AppTextField v-model="number_children" placeholder="Nombre d'enfants" persistent-placeholder :rules="[requiredValidator]" label="Nombre d'enfants" />
            </VCol>

            <VCol cols="12" class="d-flex justify-content-end">
                <VBtn type="submit" @click.prevent="submit">
                    Enregistrer
                    <VProgressCircular :size="20" width="3" color="" indeterminate class="ml-2" v-show="handleSubmit"/>
                </VBtn>
            </VCol>
        </VRow>
    </VForm>
</div>
</template>
