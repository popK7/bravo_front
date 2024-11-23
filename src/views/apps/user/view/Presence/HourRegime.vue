<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'
import HourRegimeList from './HourRegimeList.vue'


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

const resolveUserStatusVariant = stat => {
  if (stat === 'pending')
    return 'warning'
  if (stat === 'active')
    return 'success'
  if (stat === 'inactive')
    return 'secondary'
  
  return 'primary'
}

const resolveUserRoleVariant = role => {
  if (role === 'subscriber')
    return {
      color: 'warning',
      icon: 'tabler-user',
    }
  if (role === 'author')
    return {
      color: 'success',
      icon: 'tabler-circle-check',
    }
  if (role === 'maintainer')
    return {
      color: 'primary',
      icon: 'tabler-chart-pie-2',
    }
  if (role === 'editor')
    return {
      color: 'info',
      icon: 'tabler-pencil',
    }
  if (role === 'admin')
    return {
      color: 'secondary',
      icon: 'tabler-server-2',
    }
  
  return {
    color: 'primary',
    icon: 'tabler-user',
  }
};


</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard>
        <template #title>
          <h4 class="hour_regime">Rgime Horaire</h4>
        </template>
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard>
        <VCardText>
          <HourRegimeList class="hour_regime"></HourRegimeList>
        </VCardText>

      </VCard>
    </VCol>
    <!-- !SECTION -->
  </VRow>
  
</template>

<style scoped>
.card-list {
  --v-card-list-gap: 0.75rem;
}

.text-capitalize {
  text-transform: capitalize !important;
}

</style>
