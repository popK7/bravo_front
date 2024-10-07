<script setup>
import {
    emailValidator,
    requiredValidator,
} from '@validators'

const firstName = ref('')
const email = ref('')
const refForm = ref()
const remunerationTypes = [
    'Bonus',
    'Commission vente',
    'Complement salaire',
    'Heures supplementaires',
    'Indemnité pour voiture',
    'Paiement forfaitaire',
];
const items = [
    'California',
    'Colorado',
    'Florida',
    'Georgia',
    'Texas',
    'Wyoming',
];
const frequancies = [
    'Horaire',
    'Hebdomadaire',
    'Mensuel',
    'Annuel',
];
const start_at = ref('');
const end_at = ref('');
const textareaValue = ref('');
</script>

<template>
<VForm ref="refForm" @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <VAutocomplete variant="outlined" label="Type" :items="remunerationTypes" class="mb-2"/>
            <span>Ajoutez et gérez les types de rémunération <a href="">Ici</a> </span>
        </VCol>

        <VCol cols="12" md="12">
            <AppTextField v-model="firstName" :rules="[requiredValidator]" placeholder="Montant" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <VAutocomplete variant="outlined" label="Devise" :items="items" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <VAutocomplete variant="outlined" label="Fréquence" :items="frequancies" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <AppDateTimePicker v-model="start_at" placeholder="Date d'entrée en vigueur" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <AppDateTimePicker v-model="end_at" placeholder="Date de fin" />
        </VCol>

        <VCol cols="12" md="12">
            <AppTextarea v-model="textareaValue" placeholder="Laisser une note ..." auto-grow />
        </VCol>

        <VCol cols="12">
            <VBtn type="submit" @click="refForm?.validate()">
                Submit
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>
