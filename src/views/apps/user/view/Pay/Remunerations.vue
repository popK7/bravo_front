<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { reactive, ref, watch } from 'vue'

import SalaryList from '@/pages/components/simple-list-5.vue';
import additionalRemunerationList from '@/pages/components/additionalRemunerationList.vue';

import drawer from './drawer.vue'

const formData = ref(null)
const isDrawerOpen = ref(false);
const isDialogVisible = ref(false);
const isAdditionalVisible = ref(false);

const activeTab = ref('salary')

const props = defineProps({
    userData: {
        type: Object,
        required: true,
    },
})

const emit = defineEmits(['onHandleAction']);
const currentTab = ref('window1')

const salaries = [{
        id: 1,
        salary: 1200,
        currency: {name: '$', value: 1},
        frequency: {name: 'mois', value: 1},
        start_at: '28.09.2024',
        end_at: null,
        status: 'En vigueur',
        lastVisited: '13 minutes ago',
    },
    {
        id: 3,
        salary: 3200,
        currency: {name: 'dhs', value: 3},
        frequency: {name: 'mois', value: 1},
        start_at: '28.09.2024',
        end_at: '28.09.2024',
        status: 'Archive',
        lastVisited: '13 minutes ago',
    }
];

const additionals = [{
        id: 1,
        start_at: '28.09.2024',
        end_at: null,
        type: {name: "Avantage en nature", value: 1},
        currency: {name: '$', value: 1},
        frequency:{name: 'mois', value: 1},
        value: 40,
        status: {name: 'En vigueur', value: 1},
        description: "Une belle description de la remunération"
    },
    {
        id: 2,
        start_at: '28.09.2024',
        end_at: '28.09.2024',
        type: {name: "Complement salaire", value: 1},
        currency: {name: '$', value: 1},
        frequency: {name: 'mois', value: 1},
        value: 400,
        status: {name: 'Archive', value: 2},
        description: "Une belle description de la remunération"
    }
]


const addSalary = function () {
  activeTab.value = 'salary'
  isDrawerOpen.value = true
};
const addAdditionalSalary = function () {
  activeTab.value = 'additional'
  isDrawerOpen.value = true
};

const create = function(data){
  console.log(data);
  emit('onHandleAction', data)
  isDrawerOpen.value = false;
};

const handleSalarySelected = function(data) {
  activeTab.value = "update_salary";
  formData.value = data;
  isDrawerOpen.value = true;
};

const handleAditionalSelected = function(data) {
  activeTab.value = "update_additional";
  formData.value = data;
  isDrawerOpen.value = true;
};

</script>

<template>
<VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VTabs
        v-model="currentTab"
        class="v-tabs-pill mb-3"
      >
        <VTab>Salaires</VTab>
        <VTab>Additionnelles</VTab>
      </VTabs>

      <VWindow v-model="currentTab">
        <VWindowItem
          key="window1"
        >
        <VCard>
            <VCardText>
                <div class="d-flex justify-content-between salaire_header mb-5">
                    <h3 class="#">Salaires</h3>
                    <VBtn size="small" @click="addSalary">
                        Ajouter
                    </VBtn>
                </div>
                <salary-list :items="salaries" @on-selected="handleSalarySelected" :key="salaries.length"/>
            </VCardText>
        </VCard>
        </VWindowItem>

        <VWindowItem
          key="window2"
        >
        <VCard>
          <VCardText>
                <div class="d-flex justify-content-between salaire_header mb-5">
                    <h3 class="#">Rémunération additionnelle</h3>
                    <VBtn size="small" @click="addAdditionalSalary">
                        Ajouter
                    </VBtn>
                </div>
                <additional-remuneration-list :items="additionals" @on-selected="handleAditionalSelected" :key="additionals.length"/>
            </VCardText>
        </VCard>
        </VWindowItem>

      </VWindow>
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
    <drawer v-model:isDrawerOpen="isDrawerOpen" :tab="activeTab" :form-data="formData" @on-save="create" :key="Math.random()"/>
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
