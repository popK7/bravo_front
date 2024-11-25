<script setup>

import drawer from "@/views/presences/drawer.vue"
import regimes from '@/views/presences/regimes.vue'
import { useRoute } from 'vue-router';

const currentComponent = ref(regimes) 
const route = useRoute()
const activeTab = ref('regimes')

const isDrawerOpen = ref(false)

const router = useRouter()

const showSiteDrawer = function() {
  isDrawerOpen.value = true
}

const showDepartmentDrawer = function() {
  isDepartmentShowDrawer.value = true
}

const addMessage = ref("***");
const showAlert = ref(false);

const createContract = function(data) {
  
  setTimeout(() => {
    let resource = {
      id: 9, 
      name: data.name, 
      description: data.description, 
      icon: "tabler-map-pin-filled", 
      total: 9
    }

    addMessage.value = `Le contrat ${data.name} a bien été crée`;
    showAlert.value = true;
    isDrawerOpen.value = false

    resource.icon = 'tabler-map-pin-filled',
    regimeList.push(resource);
    
  }, 1000);
}
// Sites
const regimeList = reactive([
  {id: 1, name: 'kin-01', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6},
  {id: 2, name: 'kin-02', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6},
  {id: 3, name: 'kin-03', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6},
  {id: 4, name: 'kin-04', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6},
]);

// tabs
const tabs = [
  {
    title: 'regimes',
    icon: 'tabler-users',
    tab: 'regimes',
  },
];

const resources = ref(regimeList);

// show detail list
const showDetail = function(item) {
  let uri = 'settings-presences-pages-regimes';
  router.push({name: uri,  query: item})
};

const back = function() {
  router.go(-1);
};

</script>

<template>
  <VRow>
    <VCol cols="12" md="12">
        <VCard>
            <template #title>
                <div class="d-flex justify-space-between">
                    <div class="d-flex justify-space-between">
                        <button class="mr-2" @click="back">
                            <VIcon size="30" icon="tabler-square-arrow-left" />
                        </button>
                    </div>

                    <h4>Régimes des absences</h4>
                </div>
            </template>
        </VCard>
    </VCol>
    <VCol sm="12" md="3">
      <VCard class="mt-6">
        <VCardText>
          <h3>Regimes de présence</h3>
        </VCardText>
      </VCard>
    </VCol>
    <VCol sm="12" md="9">
      <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <!-- Positions -->
      <VWindowItem :value="activeTab">
        <VRow>
          <VCol
          md="12"
          offset-md="#">
          <component 
            :is="currentComponent" 
            :sites="resources"
            @on-selected="showDetail"
            @onShowDrawer="showSiteDrawer" ></component>
          </VCol>
        </VRow>
        
      </VWindowItem>

    </VWindow>
    <VSnackbar
      v-model="showAlert"
      location="top center"
    >
      {{addMessage}}
    </VSnackbar>

    <!-- Drawer -->
    <drawer
      v-model:isDrawerOpen="isDrawerOpen"
      :tab="activeTab"
      @on-save="createContract"
    />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
