<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'
import TimeSheetsTable from '@/views/presences/tables/TimeSheets.vue'
import drawer from '@/views/presences/drawer.vue'

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
        required: false,
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
const drawerOpen = ref(false);
const addTimeSheet = function() {
  drawerOpen.value = true;
}
const emit = defineEmits([
  'onshowDetail',
  'onChange'
])

const drawerClose = function() {
  drawerOpen.value = false;
};

</script>

<template>
<VRow>
  <!-- Content header picker -->
    <VCol cols="12">
      <VCard>
        <VCardText>
            <div class="d-flex justify-space-between">
              <div class="title">
              <h3>Fueille de temps</h3>
            </div>
            
            </div>
            
        </VCardText>
        
      </VCard>
      
    </VCol>
    <!-- SECTION User Details -->
    <VCol cols="12">
        <VCard>
            <VCardText class="#">
                <!-- 👉 Done task -->
                <VRow>
                    <!-- 👉 Done task -->
                    <VCol cols="8">
                      <VRow>
                         <vCol md="12">
                            <div class="btn-add">
                              <VBtn size="small" @click="addTimeSheet">
                                Ajouter
                                <VIcon
                                  end
                                  icon="tabler-checkbox"
                                />
                              </VBtn>
                            </div>
                         </vCol>
                         <vCol md="12"> 
                            <TimeSheetsTable />
                         </vCol>
                      </VRow>
                    </VCol>
                    <!-- 👉 Done task -->
                    <VCol cols="4">
                        <VRow>
                          <!-- 👉 Weekly Overview -->
                            <VCol cols="12">
                                 <h3 class="mb-5">Aperçu hebdomadaire</h3>
                                <simpleList class="mb-3" :items="tracksTimes" />
                            </VCol>

                            <VDivider></VDivider>
                            <!-- 👉 Working hours -->
                            <VCol cols="12">
                                <h3 class="mb-5 mt-2">Aperçu hebdomadaire</h3>
                                <simpleList class="mb-5" :items="workingHours"/>
                            </VCol>
                        </VRow>
                       

                    </VCol>
                </VRow>
            </VCardText>

            <VDivider />

        </VCard>
    </VCol>
    <drawer tab="sheet" :form="form" :isDrawerOpen="drawerOpen" @update:isDrawerOpen="drawerClose" />
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

.justify-flex-end{
  justify-content: flex-end !important;
}

.is_loading_spinner {
    padding: 50px;
    display: flex;
    justify-content: center;
}
.range_piker{
    width: 25%;
}

</style>
