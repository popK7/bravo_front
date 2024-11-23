<script setup>
import { ref, watch } from 'vue'

import FormationList from '@/views/formations/tables/Formations.vue';
import Drawer from '@/views/formations/Drawer.vue' 

let isDrawerVisible = ref(false)

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

const addFormation = function() {
  isDrawerVisible.value = true
};  

</script>

<template>
  <VRow>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData && !props.loader">
            <VCardText>
                <div class="d-flex justify-content-between salaire_header mb-5">
                    <h3 class="#">Formations</h3>
                    <VBtn size="small" @click="addFormation">
                        Ajouter
                        <VIcon
                          end
                          icon="tabler-checkbox"
                        />
                    </VBtn>
                </div>
            </VCardText>
        </VCard>
    </VCol>
    <VCol cols="12">
      <formation-list v-if="props.userData && !props.loader"></formation-list>
    </VCol>
    <!-- !SECTION -->
    <VCol cols="12">
      <Drawer
      tab="add_demand"
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
