<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

import Certificats from '@/pages/components/simple-list-pagination.vue';
import AddNewCertificatDrawer from '@/views/contracts/AddNewContractDrawer.vue'
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
const addAnotherDocuments = function() {
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
                    <h3>Autres documents</h3>
                    <VBtn size="small" @click="addAnotherDocuments">
                        <VIcon icon="tabler-plus" /> Ajouter
                    </VBtn>
                </div>
            </template>
        
      </VCard>
    </VCol>
    <VCol cols="12">
        <VCard>
            <VCardText>
                <Certificats></Certificats>
            </VCardText>
        </VCard> 
    </VCol>
    <!-- !SECTION -->
    <VCol cols="12">
      <AddNewCertificatDrawer
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
