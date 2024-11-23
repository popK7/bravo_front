<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { reactive, ref, watch } from 'vue'

import MyPaies from '@/pages/components/simple-list-pagination.vue';

const router = useRouter();

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

const redirectToPayPage = function(item) {
  router.push({name: 'apps-paysheet-id', params: { id: '5036' }});
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

const payCycles = reactive([{
        id: 1,
        subtitle: 'Jour de paie Jan 9, 2014',
        title: '29 mai - 28 juin 2024',
        subtitle_bis: "2024-10-12"
    },
    {
        id: 2,
        subtitle: 'Jour de paie Jan 17, 2014',
        title: '29 mai - 28 juin 2024',
        subtitle_bis: "2024-10-12"
    },
    {
        id: 3,
        subtitle: 'Jour de paie Jan 28, 2014',
        title: '29 mai - 28 juin 2024',
        subtitle_bis: "2024-10-12"
    },
]);
</script>

<template>
<VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
        <VCard>
            <template #title>
                <h3>Mes cycles de paies</h3>
            </template>
        </VCard>
    </VCol>

    <VCol cols="12">
        <VCard>
            <my-paies :data="payCycles" @onSelect="redirectToPayPage" class="mb-5" />
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

.is_loading_spinner {
    padding: 50px;
    display: flex;
    justify-content: center;
}

.hour_regime {
    margin: auto 15%;
}
</style>
