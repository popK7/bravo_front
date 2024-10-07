<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

import ProgressList from '@/pages/components/progress-list.vue';
import WaitingAbsence from '@/pages/components/simple-list-3.vue';
import AprobatorAbasence from '@/pages/components/simple-list-4.vue';

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
};


</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard>
        <template #title>
          <h3 class="mb-5">Vue d'ensemble</h3>
        </template>
        <VCardText>
          <div>
            <h3 class="mb-5">Soldes de congés et absences</h3>
            <ProgressList class="mb-5"/>
          </div>
          <WaitingAbsence class="mb-5"/>
          <AprobatorAbasence class="mb-5"/>
          
        </VCardText>
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

.is_loading_spinner{
  padding: 50px;
  display: flex;
  justify-content: center;
}
.hour_regime{
  margin: auto 15%;
}
</style>
