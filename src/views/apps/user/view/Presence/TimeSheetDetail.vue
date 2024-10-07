<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

import list from '@/pages/components/list-with-action.vue'
import simpleList from '@/pages/components/simple-list.vue'

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
  'onshowDetail'
])
const viewDetail=function(data) {
  console.log(data);
} 
</script>

<template>
<VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
        <VCard v-if="props.userData && !props.loader">
            <template #title>
                <h4>Feuille de temps</h4>
            </template>
            <VCardText class="#">
                <!-- 👉 Done task -->
                <VRow>
                    <!-- 👉 Done task -->
                    <VCol cols="8">
                        <list @onAttendanceView="viewDetail"/>
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
                                      <h5>Aperçu hebdomadaire</h5>
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
        <VCard v-else class="is_loading_spinner">
            <VProgressCircular :size="30" width="3" color="primary" indeterminate class="progress_class" />
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
</style>
