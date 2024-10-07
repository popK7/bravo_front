<script setup>

import addSite from "@/views/account/siteDrawer.vue"

import sites from '@/views/presences/regimes.vue'
import departments from '@/views/account/Departments.vue'
import positions from '@/views/account/Positions.vue'


import { useRoute } from 'vue-router';

import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const currentComponent = ref(sites)
const route = useRoute()
const activeTab = ref(route.params.tab)

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

const createSite = function(data) {
  isFinishedAdd.value = false
  
  setTimeout(() => {
    let resource = {
      id: 9, 
      name: data.name, 
      description: data.address, 
      icon: "tabler-map-pin-filled", 
      total: 9
    }

    addMessage.value = `Le ${data.resource} ${data.name} a bien été crée`;
    isFinishedAdd.value = true;
    showAlert.value = true;
    isDrawerOpen.value = false

    switch (activeTab.value) {
      case 'regimes':
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
    title: 'regimes',
    icon: 'tabler-users',
    tab: 'regimes',
  },
];


const managers = reactive([{
        name: 'Sandra Adams',
        avatar: avatar1,
    },
    {
        name: 'Ali Connors',
        avatar: avatar2,
    },
    {
        name: 'Trevor Hansen',
        avatar: avatar3,
    },
    {
        name: 'Tucker Smith',
        avatar: avatar4,
    },
    {
        name: 'Britta Holt',
        avatar: avatar5,
    },
])

const cities = reactive([
    { value: 1, title: 'Kinshasa' },
    { value: 2, title: 'Celebao' },
    { value: 3, title: 'Matete' },
]);

const countries = reactive([
    { value: 1, title: 'Maroc' },
    { value: 2, title: 'Sénégal' },
    { value: 3, title: 'Guinée' },
    { value: 4, title: 'Congo' },
]);

const status = reactive([{ title: 'Active', value: 'active' }, { title: 'Inactive', value: 'inactive' }, { title: 'Pending', value: 'pending' }]);

const resources = ref(regimeList);
// switch components
const switchComponent = function (val) {
   
    switch (val) {
     
        case 'regimes':
            currentComponent.value = sites
            resources.value = regimeList;
            break;

        default:
            break;
    }
}
// show detail list
const showDetail = function(item) {
  let uri = 'settings-presences-pages';
  uri = `${uri}-${activeTab.value}`;
  router.push({name: uri,  query: item })
}
watch(() => activeTab.value, (current, last) => {
    switchComponent(activeTab.value);
});


</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      class="v-tabs-pill"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'settings-presences-tab', params: { tab: item.tab } }"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <!-- Sites##Departments#Positions -->
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

    <!-- Sites Drawer -->
    <addSite
      v-model:isDrawerOpen="isDrawerOpen"
      :managers="managers" 
      :countries="countries" 
      :cities="cities"
      :status="status"
      :isFinished="isFinishedAdd"
      :tab="activeTab"
      @on-save="createSite"
    />
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
