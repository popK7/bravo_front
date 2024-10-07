<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'
import WorkerHierachie from '@/views/apps/forms/users/WorkerHierachie.vue' 

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
};
const saveTeam = function() {
  let data = {
    resource: 'employee::team'
  }
  emit('onHandleAction', data);
};
</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard>
        <template #title>
          <h4>Structure de l'entreprise</h4>
        </template>
        <VCardText class="#">
          <!-- 👉 Personnal data -->
          <WorkerHierachie @onHandleSaveTeam="saveTeam"/>
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
