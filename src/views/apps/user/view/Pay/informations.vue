<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

import ImformationPay from './components/InformationPay.vue';
import CompteBancaire from './components/CompteBancaire.vue';

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


</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData && !props.loader">
        <VCardText>
          <Imformation-pay class="mb-5"/>
          <VDivider />
          <compte-bancaire class="mt-5"/>
        </VCardText>
      </VCard>
      <VCard v-else class="is_loading_spinner">
        <VProgressCircular
          :size="30"
          width="3"
          color="primary"
          indeterminate
          class="progress_class"
        />
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
