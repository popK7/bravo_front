<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { ref, watch } from 'vue'

import SoldeTable from "@/views/absences/tables/Soldes.vue" 
import drawer from '@/views/absences/drawer.vue'

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

const addSolde = function() {
  drawerOpen.value = true;
}

const drawerClose = function() {
  drawerOpen.value = false;
};

</script>

<template>
<VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
        <VCard>
            <template #title>
                <div class="d-flex justify-content-between">
                    <h4>Soldes</h4>
                    <VBtn size="small" @click="addSolde">
                        Ajouter
                        <VIcon
                          end
                          icon="tabler-checkbox"
                        />
                    </VBtn>
                </div>
            </template>
        </VCard>

    </VCol>
    <VCol cols="12">
        <solde-table />
    </VCol>
    <!-- !SECTION -->
    <drawer tab="update_solde" :form="form" :isDrawerOpen="drawerOpen" @update:isDrawerOpen="drawerClose" />
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
