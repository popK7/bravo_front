<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

import Salary from '@/pages/components/simple-list-5.vue';
import additionalRemunerationList from '@/pages/components/additionalRemunerationList.vue';
import addSalaryForm from './components/AddSalaryForm.vue';
import additionalRemunerationForm from './components/AdditionalRemunerationForm.vue';

const isDialogVisible = ref(false);
const isAdditionalVisible = ref(false);
const props = defineProps({
    userData: {
        type: Object,
        required: true,
    },
    loader: {
        type: Boolean,
        default: true,
        required: true,
    },
})
let isLoading = ref(props.loader);
const showDialog = ref(false);
watch(() => props.loader, (loader, prevLoader) => {
    console.log(loader);
})

const standardPlan = {
    plan: 'Standard',
    price: 99,
    benefits: [
        '10 Users',
        'Up to 10GB storage',
        'Basic Support',
    ],
}

let addSalary = function () {
    isDialogVisible.value = true
};
let addAdditionalSalary = function () {
    isAdditionalVisible.value = true
};
setTimeout(() => {
    showDialog.value = true
    console.log(showDialog.value);
}, 2000);
showDialog.value = true
</script>

<template>
<VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
        <VCard>
            <template #title>
                <h3>Rémunerations</h3>
            </template>
            <VCardText>
                <div class="d-flex justify-content-between salaire_header mb-5">
                    <h3 class="#">Salaires</h3>
                    <VBtn size="small" @click="addSalary">
                        Ajouter
                    </VBtn>
                </div>
                <Salary></Salary>
            </VCardText>
            <VCardText>
                <div class="d-flex justify-content-between salaire_header mb-5">
                    <h3 class="#">Rémunération additionnelle</h3>
                    <VBtn size="small" @click="addAdditionalSalary">
                        Ajouter
                    </VBtn>
                </div>
                <additional-remuneration-list></additional-remuneration-list>
            </VCardText>
        </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION ADD SALARY-->

    <!-- SECTION MODAL ADD SALARY-->
    <VDialog v-model="isDialogVisible" width="500">

        <!-- Dialog Content -->
        <VCard>
            <template #title>
              <h4>Nouveau salaire</h4>
            </template>
            <VCardText>
                <add-salary-form></add-salary-form>
            </VCardText>

        </VCard>
    </VDialog>
    <!-- SECTION MODAL ADD ADDITIONAL SALARY-->
    <VDialog v-model="isAdditionalVisible" width="500">

        <!-- Dialog Content -->
        <VCard VCard>
          <template #title>
              <h4>Rémuneration additionnelle</h4>
            </template>
            <VCardText>
                <additional-remuneration-form></additional-remuneration-form>
            </VCardText>

        </VCard>
    </VDialog>
</VRow>
</template>

<style lang="scss" scoped>
.card-list {
    --v-card-list-gap: 0.75rem;
}

.text-capitalize {
    text-transform: capitalize !important;
}

.is_loading_spinner {
    padding: 50px;
    display: flex;
    justify-content: center;
}

.hour_regime {
    margin: auto 15%;
}
</style>

<style scoped>
.justify-content-between {
    justify-content: space-between
}

.salaire_header {
    border: 1px solid #CCC;
    padding: 2%;
    border-radius: 5px;
}
</style>
