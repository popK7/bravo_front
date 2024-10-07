<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'

const items = [
    'California',
    'Colorado',
    'Florida',
    'Georgia',
    'Texas',
    'Wyoming',
]

const num_if = ref('')
const num_sc = ref('')
const seek_assurance = ref()
const compagny_seek_assurance = ref('')
const number_children = ref(0)
const t = '';
</script>

<template>
<div>
    <h3 class="mb-5">Informations paie</h3>
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

            <VCol cols="12">
                <VBtn type="submit" @click="refForm?.validate()">
                    Submit
                </VBtn>
            </VCol>
        </VRow>
    </VForm>
</div>
</template>
