<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

import ImformationPay from './components/InformationPay.vue';
import CompteBancaire from './components/CompteBancaire.vue';

const emit = defineEmits(['onHandleAction'])

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

const create = function (data) {
    emit('onHandleAction', data)
}

const standardPlan = {
    plan: 'Standard',
    price: 99,
    benefits: [
        '10 Users',
        'Up to 10GB storage',
        'Basic Support',
    ],
};

const currentTab = ref('window1');
</script>

<template>
<VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
        <VTabs v-model="currentTab" class="v-tabs-pill mb-3">
            <VTab>Informations paie</VTab>
            <VTab>Compte bancaire</VTab>
        </VTabs>

        <VWindow v-model="currentTab">

            <VWindowItem key="window1">
                <VCard>
                    <VCardText>
                        <h3 class="mb-5">Information</h3>
                        <Imformation-pay @save="create" class="mb-5" />
                    </VCardText>
                </VCard>
            </VWindowItem>

            <VWindowItem key="window2">
                <VCard>
                    <VCardText>
                        <h3>Compte bancaire</h3>
                        <compte-bancaire @save="create" class="mt-5" />
                    </VCardText>
                </VCard>
            </VWindowItem>
        </VWindow>
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
</style>
