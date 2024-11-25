<script setup>
import drawer from "@/views/account/Drawer.vue"

import sites from '@/views/account/sites.vue'
import departments from '@/views/account/Departments.vue'
import positions from '@/views/account/Positions.vue'
import pageContentNav from '@/pages/components/page-content-nav.vue'
import {structures} from '@/helpers/settings-nav'


import { useRoute } from 'vue-router';

const components = {
    'positions': positions,
    'departments': departments,
    'sites': sites,

}
const route = useRoute()
const currentComponent = ref(components[route.params.tab])
const activeTab = ref(route.params.tab)

const isDrawerOpen = ref(false)


const router = useRouter()

const addMessage = ref("***");
const showAlert = ref(false);

const showDrawer = function () {
    isDrawerOpen.value = true
}

const create = function (data) {
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

const icons = {
    positions: 'tabler-accessible',
    departments: 'tabler-map-pin-filled',
    sites: 'tabler-ankh',
}
const icon = ref(icons[route.params.tab]);
// Sites
const siteList = reactive([
    { id: 1, name: 'kin-01', description: '4, rue de la fonde n°23', icon: icons.sites, total: 9 },
    { id: 2, name: 'kin-02', description: '4, rue de la fonde n°23', icon: icons.sites, total: 9 },
    { id: 3, name: 'kin-03', description: '4, rue de la fonde n°23', icon: icons.sites, total: 9 },
    { id: 4, name: 'kin-04', description: '4, rue de la fonde n°23', icon: icons.sites, total: 9 },
]);

// Departments
const departmentList = reactive([
    { id: 1, name: 'kin-01', description: '4, rue de la fonde n°23', icon: icons.departments, total: 6 },
    { id: 2, name: 'kin-02', description: '4, rue de la fonde n°23', icon: icons.departments, total: 6 },
    { id: 3, name: 'kin-03', description: '4, rue de la fonde n°23', icon: icons.departments, total: 6 },
    { id: 4, name: 'kin-04', description: '4, rue de la fonde n°23', icon: icons.departments, total: 6 },
]);

// Positions
const positionList = reactive([
    { id: 1, name: 'kin-01', description: '4, rue de la fonde n°23', icon: icons.positions, total: 11 },
    { id: 2, name: 'kin-02', description: '4, rue de la fonde n°23', icon: icons.positions, total: 11 },
    { id: 3, name: 'kin-03', description: '4, rue de la fonde n°23', icon: icons.positions, total: 11 },
    { id: 4, name: 'kin-04', description: '4, rue de la fonde n°23', icon: icons.positions, total: 11 },
]);


const data = {
    positions: positionList,
    departments: departmentList,
    sites: siteList,

}

const resources = ref(siteList);

// show detail list
const showDetail = function (item) {
    let uri = 'settings-structures-pages';
    uri = `${uri}-${activeTab.value}`;
    router.push({ name: uri, query: item })
}


const handleClick = function (e) {
    router.push(e);
    
};

watch(route, (to) => {
    activeTab.value = route.params.tab;
    icon.value = icons[activeTab.value]
    resources.value = data[activeTab.value];
    currentComponent.value = components[activeTab.value];
}, { flush: 'pre', immediate: true, deep: true });
</script>

<template>
<VRow>
  <VCol cols="12" md="12">
            <VCard>
                <template #title>
                    <div class="d-flex justify-space-between">
                      <div class="d-flex justify-space-between">
                        <button class="mr-2" @click="router.go(-1)">
                            <VIcon size="30" icon="tabler-square-arrow-left" />
                        </button>
                        <h4>{{ route.query.name }}</h4>
                    </div>
                      
                      <h4>Structure de l'entreprise</h4>
                    </div>
                </template>
            </VCard>
        </VCol>
    <VCol md="3">
        <pageContentNav @click="handleClick" :data="structures" class="mt-6" />
    </VCol>
    <VCol md="9">
        <VWindow v-model="activeTab" class="mt-6 disable-tab-transition" :touch="false">
            <!-- Sites##Departments#Positions -->
            <VWindowItem :value="activeTab">
                <VRow>
                    <VCol md="12" offset-md="#">
                        <component 
                        :is="currentComponent" 
                        :data="resources" 
                        :key="activeTab"
                        :entity="activeTab"
                        :icon="icon"
                        @on-selected="showDetail" 
                        @onShowDrawer="showDrawer"></component>
                    </VCol>
                </VRow>

            </VWindowItem>

        </VWindow>
    </VCol>
    <!-- Drawer -->
    <drawer v-model:isDrawerOpen="isDrawerOpen" :tab="activeTab" @on-save="create" />
</VRow>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
