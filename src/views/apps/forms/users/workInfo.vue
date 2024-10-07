<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'

const emit = defineEmits(['onHandleInfos']);
const contract_start_at = ref()
const contract_end_at = ref()
const contract = ref()
const site = ref()
const employee_num = ref()
const refForm = ref()
const sec_bank_num = ref()
const fction = ref()
const sites = ['Casanearshore', 'Marrakech', 'Mohamedia', 'Kinshasa']
const functions = ['Admnistrateur BD', 'Commercial', 'Acheteur', 'Directeur']
const contracts = ['Temps partiel(30)', 'Temps plein(40)', 'CDD', 'Autre']

const saveInfo = function() {
  refForm.value ?.validate().then(({ valid }) => {
        if (valid) {
            let data = {
                'contract_start_at': contract_start_at.value,
                'contract_end_at': contract_end_at.value,
                'employee_num': employee_num.value,
                'site': site.value,
                'position': fction.value,
                'contract': contract.value,
            }
            emit('onHandleInfos', data)
        }
    })
};
</script>

<template>
<VForm ref="refForm" @submit.prevent="saveInfo">
    <VRow>
      <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Date d'embauche </label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppDateTimePicker v-model="contract_start_at" placeholder="Date d'embauche" :rules="[requiredValidator]"/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Fin d'emploi </label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppDateTimePicker v-model="contract_end_at" placeholder="Fin d'emploi" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Numéro employé </label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppTextField v-model="employee_num" type="number" placeholder="Numéro employé" persistent-placeholder :rules="[requiredValidator]"/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Site </label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppSelect :items="sites"  placeholder="Site" v-model="site" :rules="[requiredValidator]"/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Function </label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppSelect :items="functions" placeholder="Function" v-model="fction" :rules="[requiredValidator]"/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Contrat </label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppSelect :items="contracts" placeholder="Contrat" v-model="contract" :rules="[requiredValidator]"/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Compte bancaire </label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppTextField v-model="sec_bank_num" type="text" placeholder="Compte bancaire secondaire" persistent-placeholder/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" class="d-flex justify-content-end">
            <VBtn type="submit" >
                Enregistrer
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>
<style scoped>
  .justify-content-end{
    justify-content: flex-end
  }
</style>
