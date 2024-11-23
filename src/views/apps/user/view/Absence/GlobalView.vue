<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { reactive, ref, watch } from 'vue'

import ProgressList from '@/pages/components/progress-list.vue';
import WaitingAbsence from '@/pages/components/simple-list-3.vue';
import AprobatorAbasence from '@/pages/components/simple-list-4.vue';
import drawer from './drawer.vue';

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

const demands = [{
        id: 1,
        subject: 'Congé annuel payé',
        description: '',
        from: '024-10-11 12:01:02',
        to: '024-10-11 12:01:02',
        date: '2024-10-11',
    },
    {
        id: 2,
        subject: 'Congé maladie',
        description: '',
        from: '024-10-11 12:01:02',
        to: '024-10-11 12:01:02',
        date: '2024-10-11',
    },
    {
        id: 3,
        subject: 'Celia Schneider',
        description: '',
        from: '024-10-11 12:01:02',
        to: '024-10-11 12:01:02',
        date: '2024-10-11',
    },
    {
        id: 3,
        subject: 'Max Rogan',
        description: '',
        from: '024-10-11 12:01:02',
        to: '024-10-11 12:01:02',
        date: '2024-10-11',
    },
]

const drawerOpen = ref(false);
const form = ref(null);

const handleSelect = function(data) {
  form.value = data;
  drawerOpen.value = true;
  console.log(form);
}
const test = function(val) {
  drawerOpen.value = val;
}
const currentTab = ref('window1');

</script>

<template>
<VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
        <VTabs v-model="currentTab" class="v-tabs-pill mb-3">
            <VTab>Soldes de congés</VTab>
            <VTab>Absences en attente</VTab>
        </VTabs>

        <VWindow v-model="currentTab">

            <VWindowItem key="window1">
                <VCard>
                    <template #title>
                      <h4>Congés & absences</h4>
                    </template>
                    <VCardText>
                      <ProgressList class="mb-5" />
                    </VCardText>
                </VCard>
            </VWindowItem>

            <VWindowItem key="window2">
                <VCard>
                    <template #title>
                      <div class="d-flex justify-space-between">
                        <h4>Absences en attente</h4>
                      </div>
                      
                    </template>
                    <VCardText>
                      <WaitingAbsence :items="demands" @on-select="handleSelect" class="mb-5" />
                    </VCardText>
                </VCard>
            </VWindowItem>
        </VWindow>
        <VCard class="mt-5">
            <VCardText>
                <AprobatorAbasence class="mb-5" />
            </VCardText>
        </VCard>
    </VCol>
    <!-- !SECTION -->
    <drawer tab="update_demand" :form="form" :isDrawerOpen="drawerOpen" @update:isDrawerOpen="test"/>
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
