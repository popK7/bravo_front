<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

import ExpenseList from './components/ExpenseList.vue';
import AddNewExpenseDrawer from '@/views/expenses/AddNewExpenseDrawer.vue'

let isAddNewExpenseDrawerVisible = ref(false)

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

const addProduct = function() {
  console.log('successs');
  isAddNewExpenseDrawerVisible.value = true
};  
</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard>
            <VCardText>
                <div class="d-flex justify-content-between salaire_header mb-5">
                    <h3 class="#">Notes de frais</h3>
                    <VBtn size="small" @click="addProduct">
                        Ajouter
                    </VBtn>
                </div>
            </VCardText>
        </VCard>
    </VCol>
    <VCol cols="12">
      <expense-list></expense-list>
    </VCol>
    <!-- !SECTION -->
    <VCol cols="12">
      <AddNewExpenseDrawer
      v-model:isDrawerOpen="isAddNewExpenseDrawerVisible"
      @user-data="addNewUser"
    />
    </VCol>
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
<style scoped>
.justify-content-between {
  justify-content: space-between;
}
</style>
