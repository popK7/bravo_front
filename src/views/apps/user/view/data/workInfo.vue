<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'
import WorkInfo from '@/views/apps/forms/users/WorkInfo.vue'


const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)

const emit = defineEmits([
  'onHandleAction'
]);
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

const standardPlan = {
  plan: 'Standard',
  price: 99,
  benefits: [
    '10 Users',
    'Up to 10GB storage',
    'Basic Support',
  ],
}

const save = function() {
  let data = {
    'resource': 'employee::information'
  }
  emit('onHandleAction', data);
};

</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard>
        <VCardText class="">
          <!-- 👉 Personnal data -->
          <WorkInfo @onHandleInfos='save'/>
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
