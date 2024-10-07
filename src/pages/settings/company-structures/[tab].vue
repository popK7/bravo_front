<script setup>
import addSite from "@/views/account/siteDrawer.vue"

import sites from '@/views/account/sites.vue'
import departments from '@/views/account/Departments.vue'
import positions from '@/views/account/Positions.vue'
import pageContentNav from '@/pages/components/page-content-nav.vue'


import { useRoute } from 'vue-router';

import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const uris = {
  'positions': positions,
  'departments': departments,
  'sites': sites,

}
const route = useRoute()
const currentComponent = ref(uris[route.params.tab])
const activeTab = ref(route.params.tab)

const isDrawerOpen = ref(false)
const isDepartmentShowDrawer = ref(false)
const isFinishedAdd = ref(true)
const isSnackbarTopEndVisible = false

const router = useRouter()

const showSiteDrawer = function () {
    isDrawerOpen.value = true
}

const showDepartmentDrawer = function () {
    isDepartmentShowDrawer.value = true
}

const addMessage = ref("***");
const showAlert = ref(false);

const createSite = function (data) {
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
            case 'sites':
                resource.icon = 'tabler-map-pin-filled'
                siteList.push(resource)
                break;

            case 'departments':
                resource.icon = 'tabler-ankh'
                departmentList.push(resource)
                break;

            case 'positions':
                resource.icon = 'tabler-accessible'
                positionList.push(resource)
                break;

            default:
                break;
        }
    }, 5000);
}
// Sites
const siteList = reactive([
    { id: 1, name: 'kin-01', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
    { id: 2, name: 'kin-02', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
    { id: 3, name: 'kin-03', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
    { id: 4, name: 'kin-04', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
]);

// Departments
const departmentList = reactive([
    { id: 1, name: 'kin-01', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
    { id: 2, name: 'kin-02', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
    { id: 3, name: 'kin-03', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
    { id: 4, name: 'kin-04', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
]);

// Positions
const positionList = reactive([
    { id: 1, name: 'kin-01', description: '4, rue de la fonde n°23', icon: "tabler-accessible", total: 6 },
    { id: 2, name: 'kin-02', description: '4, rue de la fonde n°23', icon: "tabler-accessible", total: 6 },
    { id: 3, name: 'kin-03', description: '4, rue de la fonde n°23', icon: "tabler-accessible", total: 6 },
    { id: 4, name: 'kin-04', description: '4, rue de la fonde n°23', icon: "tabler-accessible", total: 6 },
]);

// tabs
const tabs = [{
        title: 'Sites',
        icon: 'tabler-users',
        tab: 'sites',
    },
    {
        title: 'Departments',
        icon: 'tabler-lock',
        tab: 'departments',
    },
    {
        title: 'Functions',
        icon: 'tabler-file-text',
        tab: 'positions',
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

const navigations = [
    { id: 1, title: 'Sites', value: 'sites', component: 'sites', icon: 'tabler-users', items: [] },
    { id: 2, title: 'Departements', value: 'departments', component: 'departments', icon: 'tabler-users', items: [] },
    { id: 3, title: 'Fonctions', value: 'positions', component: 'positions', icon: 'tabler-settings', items: [] }
];

const status = reactive([{ title: 'Active', value: 'active' }, { title: 'Inactive', value: 'inactive' }, { title: 'Pending', value: 'pending' }]);

const resources = ref(siteList);
// switch components
const switchComponent = function (val) {

    switch (val) {

        case 'sites':
            currentComponent.value = sites
            resources.value = siteList;
            break;
        case 'departments':
            currentComponent.value = departments
            resources.value = departmentList;
            break;
        case 'positions':
            currentComponent.value = positions
            resources.value = positionList;
            break;

        default:
            break;
    }
}
// show detail list
const showDetail = function (item) {
    let uri = 'settings-company-structures-pages';
    uri = `${uri}-${activeTab.value}`;
    router.push({ name: uri, query: item })
}
watch(() => activeTab.value, (current, last) => {
    switchComponent(activeTab.value);
});
watch(route, (e) =>{
  activeTab.value = route.params.tab;
});
  
// 
const handleClick = function(e) {
  router.push(e);
}
</script>

<template>
<VRow>
    <VCol md="3">
      <pageContentNav @click="handleClick" :data="navigations" class="mt-6"/>
    </VCol>
    <VCol md="9">
        <VWindow v-model="activeTab" class="mt-6 disable-tab-transition" :touch="false">
            <!-- Sites##Departments#Positions -->
            <VWindowItem :value="activeTab">
                <VRow>
                    <VCol md="12" offset-md="#">
                        <component :is="currentComponent" :sites="resources" @on-selected="showDetail" @onShowDrawer="showSiteDrawer"></component>
                    </VCol>
                </VRow>

            </VWindowItem>

        </VWindow>
    </VCol>
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
</VRow>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
