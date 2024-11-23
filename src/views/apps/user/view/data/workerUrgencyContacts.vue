<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue' 
import workerUrgencyContacts from '@/views/apps/forms/users/WorkerUrgencyContacts.vue' 

const emit = defineEmits([
  'onHandleAction'
]);
const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)

const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
  loader: {
    type: Boolean,
    default: false,
    required: false,
  },
})
let isLoading = ref(props.loader);

const standardPlan = {
  plan: 'Standard',
  price: 99,
  benefits: [
    '10 Users',
    'Up to 10GB storage',
    'Basic Support',
  ],
};
const save = function() {
  let data = {
    resource: 'employee::urgent::contact'
  }
  emit('onHandleAction', data);
};
</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData && !props.loader">
        <template #title>
          <h4>Contact urgence</h4>
        </template>
        <VCardText class="#">
          <!-- 👉 Personnal data -->
          <workerUrgencyContacts @onSave="save"/>
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
</style>
