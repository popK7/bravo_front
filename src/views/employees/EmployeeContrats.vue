<script setup>
import { ref, watch } from 'vue'

import MyPay from '@/pages/components/simple-list-pagination.vue';
import drawer from '@/views/contracts/Drawer.vue'
import Files from '@/pages/components/bravo/fileList.vue'; 

const isDrawerVisible = ref(false);

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
const addContrat = function() {
  isDrawerVisible.value = true
};
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
        <VCard>
            <VCardText>
                <files />
            </VCardText>
        </VCard>
    </VCol>
    <!-- !SECTION -->
    <VCol cols="12">
      <drawer
      tag="add_contract"
      v-model:isDrawerOpen="isDrawerVisible"
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
