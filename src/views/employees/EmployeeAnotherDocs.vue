<script setup>
import { ref, watch } from 'vue'
import drawer from '@/views/others/Drawer.vue'
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

const addAnotherDocuments = function() {
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
                    <h3>Autres documents</h3>
                    <VBtn size="small" @click="addAnotherDocuments">
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
      tab="add"
      v-model:isDrawerOpen="isDrawerVisible"
      @user-data="addNewUser"
    />
    </VCol>
</VRow>
</template>

<style lang="scss" scoped>
.justify-content-between {
    justify-content: space-between;
}
</style>
