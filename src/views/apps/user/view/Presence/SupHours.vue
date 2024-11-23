<script setup>
import { ref, watch } from 'vue'
import SupHoursTable from '@/views/presences/tables/SupHours.vue'
import drawer from '@/views/presences/drawer.vue'

const drawerOpen = ref(false);

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

const drawerClose = function() {
  drawerOpen.value = false;
}

const addSupHour = function() {
  drawerOpen.value = true
};


</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard>
        <template #title>
          <div class="d-flex justify-content-between">
            <h4>Heures supplementaires</h4>
            <VBtn size="small" @click="addSupHour">
              Ajouter
            </VBtn>
          </div>
          
        </template>
        
      </VCard>
    </VCol>
    <VCol cols="12">
      <SupHoursTable />
    </VCol>
    <!-- !SECTION -->
    <drawer tab="sup_hours" :form="form" :isDrawerOpen="drawerOpen" @update:isDrawerOpen="drawerClose" />

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
.justify-content-between{
  justify-content: space-between;
}
</style>
