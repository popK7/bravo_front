<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

import WorkerSocialMedia from '@/views/apps/forms/users/WorkerSocialMedia.vue' 


const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)

const emit = defineEmits([
  'onHandleAction'
])
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

const save = function() {
  let data = {
    resource: 'employee::social::media'
  }
  emit('onHandleAction', data);
};
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
      <VCard v-if="props.userData && !props.loader">
        <template #title>
          <h4>Media sociaux</h4>
        </template>
        <VCardText class="#">
          <!-- 👉 Personnal data -->
          <WorkerSocialMedia @onSave="save"/>
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
