<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

const days = function (from, to) {
    var d = new Date(from),
        _to = new Date(to),
        a = [], 
        i = 0,
        y = ['DIM.', 'LUN.', 'MAR.', 'MER.', 'JEU.', 'VEND.', 'SAM.'];
    while (d < _to) {
        a.push({ "day": d.getDate(), 'month': d.getMonth(), "year":d.getFullYear, "name": y[d.getDay()], "value": i++ });
        d.setDate(d.getDate() + 1);
    }
    if (d.getDay() === _to.getDay()) // include last day
        a.push({ "day": d.getDate(), 'month': d.getMonth(), "year":d.getFullYear, "name": y[d.getDay()], "value": i++ });
    return a;
}

let items = ref(days("2024-10-10", "2024-10-16"))

import list from '@/pages/components/list-with-action.vue'
import simpleList from '@/pages/components/simple-list.vue'

const dateRange = ref('2024-10-10 to 2024-11-10')


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

watch(dateRange, (newValue, oldValue) => {
  const dates = newValue.split('to')
  const data = {
    from: dates[0] ?? null,
    to: dates[1] ?? null
  }
  
  items.value = days(data.from, data.to);
  
  emit('onChange', data)
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

const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)

const tracksTimes = [
  {
    name: 'Attendu',
    value: '48H',
    total: 48
  },
  {
    name: 'Suivi',
    value: '23H',
    totak: 23,
  },
  {
    name: 'Heures sup',
    value: '-15H',
    totak: -15,
  }
]

const workingHours = [
  {
    name: 'Lun',
    value: '8H',
    total: 8
  },
  {
    name: 'Mar',
    value: '8H',
    totak: 8,
  },
  {
    name: 'Mer',
    value: '8H',
    total: 8
  },
  {
    name: 'Jeu',
    value: '8H',
    totak: 8,
  },
  {
    name: 'Vend',
    value: '8H',
    total: 8
  },
  {
    name: 'Sam',
    value: '--',
    totak: 0,
  },
  {
    name: 'Dim',
    value: '--',
    totak: 0,
  },
  {
    name: 'Total',
    value: '40H',
    totak: 40,
  }
]
const emit = defineEmits([
  'onshowDetail',
  'onChange'
])
const viewDetail=function(data) {
  emit('onshowDetail', data)
};

</script>

<template>
<VRow>
  <!-- Content header picker -->
    <VCol cols="12">
      <VCard>
        <VCardText>
            <div class="range_piker">
              <AppDateTimePicker
                v-model="dateRange" 
                label="Intervalle"
                Placeholder="Intervalle"
                :config="{ mode: 'range' }" 
              />
            </div>
        </VCardText>
        
      </VCard>
      
    </VCol>
    <!-- SECTION User Details -->
    <VCol cols="12">
        <VCard>
            <template #title>
                <h4>Feuille de temps</h4>
            </template>
            <VCardText class="#">
                <!-- 👉 Done task -->
                <VRow>
                    <!-- 👉 Done task -->
                    <VCol cols="8">
                        <list @onAttendanceView="viewDetail" :items="items"/>
                    </VCol>
                    <!-- 👉 Done task -->
                    <VCol cols="4">
                        <VRow>
                          <!-- 👉 Weekly Overview -->
                            <VCol cols="12">
                                <VCard class="" title="Aperçu hebdomadaire">
                                    <template #title>
                                      <h5>Aperçu hebdomadaire</h5>
                                    </template>
                                    <simpleList class="mb-5" :items="tracksTimes" />
                                </VCard>
                            </VCol>
                            <!-- 👉 Working hours -->
                            <VCol cols="12">
                                <VCard class="" title="Horaire de travail">
                                  <template #title>
                                      <h5>Horaire de travail</h5>
                                    </template>
                                    <simpleList class="mb-5" :items="workingHours"/>
                                </VCard>
                            </VCol>
                        </VRow>
                       

                    </VCol>
                </VRow>
            </VCardText>

            <VDivider />

        </VCard>
    </VCol>
    <!-- !SECTION -->
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
.range_piker{
    width: 25%;
    margin: auto 75%;
}
</style>
