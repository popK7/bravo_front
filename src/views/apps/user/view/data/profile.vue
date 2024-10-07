<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'
import Profile from '@/views/apps/forms/users/Profile.vue'

const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)

let isVisible = ref(false);

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

const emit = defineEmits([
  'onHandleAction'
]);
const standardPlan = {
  plan: 'Standard',
  price: 99,
  benefits: [
    '10 Users',
    'Up to 10GB storage',
    'Basic Support',
  ],
};

const saveProfile = function(data) {
  console.log("test")
  emit('onHandleAction', data);
};
</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard>
        <template #title>
            <h4>Profile de l'employé</h4>
        </template>
        <VCardText class="">
          <!-- 👉 Personnal data -->
          <profile @onSaveProfile="saveProfile"/>
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

</style>
