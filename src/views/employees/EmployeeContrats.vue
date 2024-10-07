<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

import MyPay from '@/pages/components/simple-list-pagination.vue';
import AddNewContractDrawer from '@/views/contracts/AddNewContractDrawer.vue'
const isAddNewContractDrawerVisible = ref(false);

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
const addContrat = function() {
  isAddNewContractDrawerVisible.value = true
}
</script>

<template>
<VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard>
        <template #title>
                <div class="d-flex justify-content-between salaire_header mb-5">
                    <h4>Contrats</h4>
                    <VBtn size="small" @click="addContrat">
                        <VIcon icon="tabler-plus" /> Ajouter
                    </VBtn>
                </div>
            </template>
        
      </VCard>
    </VCol>
    <VCol cols="12">
        <VCard>
            <VCardText>
                <MyPay></MyPay>
            </VCardText>
        </VCard>
    </VCol>
    <!-- !SECTION -->
    <VCol cols="12">
      <AddNewContractDrawer
      v-model:isDrawerOpen="isAddNewContractDrawerVisible"
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

.is_loading_spinner {
    padding: 50px;
    display: flex;
    justify-content: center;
}

.hour_regime {
    margin: auto 15%;
}

.justify-content-between {
    justify-content: space-between;
}
</style>
