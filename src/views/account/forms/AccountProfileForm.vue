<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'

const name = ref()
const lodo = ref()
const refForm = ref()
const id = ref()
const web_site = ref();
const if_num = ref();
const tva_num = ref();
const rc_num = ref();
const va_num = ref();
const mission = ref();
</script>

<template>
<VForm ref="refForm" @submit.prevent="() => {}">

    <VRow>
        <VCol cols="12" md="2" class="d-flex align-items-center">
            <label class="v-label text-body-2 text-high-emphasis" for="firstName">Nom de l'entreprise
                <b class="text-error mr-2">*</b></label>
        </VCol>
        <VCol cols="12" md="10">
            <AppTextField v-model="name" placeholder="Account name" persistent-placeholder :rules="[requiredValidator]" />
        </VCol>
    </VRow>

    <VRow>
        <VCol cols="12" md="2" class="d-flex align-items-center">
            <label class="v-label text-body-2 text-high-emphasis" for="firstName">Logo d'entrepris</label>
        </VCol>
        <VCol cols="12" md="10">
            <VFileInput label="File input" v-model="logo" :rules="[requiredValidator]" />
        </VCol>
    </VRow>

    <VRow>
        <VCol cols="12" md="2" class="d-flex align-items-center">
            <label class="v-label text-body-2 text-high-emphasis" for="firstName">Numéro d'identification bravoRH</label>
        </VCol>
        <VCol cols="12" md="10">
            <h4>38940</h4>
        </VCol>
    </VRow>

    <VRow>
        <VCol cols="12" md="2" class="d-flex align-items-center">
            <label class="v-label text-body-2 text-high-emphasis" for="firstName">Site web de l'entreprise</label>
        </VCol>
        <VCol cols="12" md="10">
            <AppTextField v-model="web_site" placeholder="Site web de l'entreprise" persistent-placeholder :rules="[requiredValidator]" />
        </VCol>
    </VRow>

    <VRow>
        <VCol cols="12" md="2" class="d-flex align-items-center">
            <label class="v-label text-body-2 text-high-emphasis" for="firstName">Identifiant fiscal de l'entreprise
                <b class="text-error mr-2">*</b></label>
        </VCol>
        <VCol cols="12" md="10">
            <AppTextField v-model="if_num" placeholder="Identifiant fiscal de l'entreprise" persistent-placeholder :rules="[requiredValidator]" />
        </VCol>
    </VRow>

    <VRow>
        <VCol cols="12" md="2" class="d-flex align-items-center">
            <label class="v-label text-body-2 text-high-emphasis" for="firstName">Registre commerce de l'entreprise
                <b class="text-error mr-2">*</b></label>
        </VCol>
        <VCol cols="12" md="10">
            <AppTextField v-model="rc_num" placeholder="Registre de commerce" persistent-placeholder :rules="[requiredValidator]" />
        </VCol>
    </VRow>

    <VRow>
        <VCol cols="12" md="2" class="d-flex align-items-center">
            <label class="v-label text-body-2 text-high-emphasis" for="firstName">Numéro de TVA</label>
        </VCol>
        <VCol cols="12" md="10">
            <AppTextField v-model="tva_num" placeholder="Tax sur la valeur ajoutée" persistent-placeholder :rules="[requiredValidator]" />
        </VCol>
    </VRow>

    <VRow>
        <VCol cols="12" md="2" class="d-flex align-items-center">
            <label class="v-label text-body-2 text-high-emphasis" for="creatiion_year">Année de création
            </label>
        </VCol>
        <VCol cols="12" md="10">
            <AppTextField id="creatiion_year" v-model="tva_num" placeholder="Année de création" persistent-placeholder :rules="[requiredValidator]" />
        </VCol>
    </VRow>

    <VRow>
        <VCol cols="12" md="2" class="d-flex align-items-center">
            <label class="v-label text-body-2 text-high-emphasis" for="creatiion_year">Mission de l'entreprise
            </label>
        </VCol>
        <VCol cols="12" md="10">
            <AppTextarea v-model="mission" />
        </VCol>
    </VRow>
    <VRow>
        <VCol cols="12" md="12" class="d-flex" style="justify-content: flex-end">
            <VBtn type="submit">
                Submit
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>
