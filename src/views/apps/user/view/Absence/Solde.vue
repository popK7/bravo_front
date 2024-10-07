<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

import SoldeTable from "./SoldeTable.vue"

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
</script>

<template>
<VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
        <VCard>
            <template #title>
                <div class="d-flex justify-content-between">
                    <h4>Soldes</h4>
                    <VBtn size="small" @click="addProduct">
                        Ajouter
                    </VBtn>
                </div>
            </template>
        </VCard>

    </VCol>
    <VCol cols="12">
        <SoldeTable></SoldeTable>
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
