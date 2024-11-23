<script setup>

import additional from "@/views/paies/payDrawer.vue"
import advantages from '@/views/paies/advantages.vue'
import { useRoute } from 'vue-router';

const currentComponent = ref(advantages)
const route = useRoute()
const activeTab = ref('advantages')

const isDrawerOpen = ref(false)
const isDepartmentShowDrawer = ref(false)
const isFinishedAdd = ref(true)
const isSnackbarTopEndVisible = false

const router = useRouter()

const showSiteDrawer = function() {
  isDrawerOpen.value = true
}

const showDepartmentDrawer = function() {
  isDepartmentShowDrawer.value = true
}

const addMessage = ref("***");
const showAlert = ref(false);

const createAdvantage = function(data) {
  isFinishedAdd.value = false
  
  setTimeout(() => {
    let resource = {
      id: 9, 
      name: data.name, 
      description: data.description, 
      icon: "tabler-map-pin-filled", 
      total: 9
    }

    addMessage.value = `Le ${data.name} a bien été crée`;
    isFinishedAdd.value = true;
    showAlert.value = true;
    isDrawerOpen.value = false

    switch (activeTab.value) {
      case 'advantages':
        resource.icon = 'tabler-map-pin-filled'
        regimeList.push(resource)
      break;
    
      default:
        break;
    }
  }, 5000);
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
    title: 'advantages',
    icon: 'tabler-users',
    tab: 'advantages',
  },
];


const resources = ref(regimeList);

// show detail list
const showDetail = function(item) {
  let uri = 'settings-paies-pages-advantages';
  router.push({name: uri,  query: {id:item.id, name:item.name, description: item.description}})
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

                    <h4>Rémunerations additionnelles</h4>
                </div>
            </template>
        </VCard>
    </VCol>
    <VCol sm="12" md="3">
      <VCard class="mt-6">
        <VCardText>
          <h3>Avantages</h3>
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
            :data="resources"
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

    <!-- Sites Drawer -->
    <additional
      v-model:isDrawerOpen="isDrawerOpen"
      :tab="activeTab"
      @on-save="createAdvantage"
    />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
