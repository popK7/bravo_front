<script setup>
import drawer from "@/views/absences/drawer.vue"

import regimes from '@/views/absences/regimes.vue'
import types from '@/views/absences/types.vue'

import pageContentNav from '@/pages/components/page-content-nav.vue'

import { useRoute } from 'vue-router';

const uris = {
    'regimes': regimes,
    'types': types,

}
const route = useRoute()
const currentComponent = ref(uris[route.params.tab])
const activeTab = ref(route.params.tab)

const isDrawerOpen = ref(false)
const isSnackbarTopVisible = ref(false)
const snackbarText = ref('');

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

const create = function (data) {
    console.log(data);
    setTimeout(() => {
        let resource = {
            id: 9,
            name: data.name,
            description: data.description,
            icon: "tabler-map-pin-filled",
            total: 9
        }

        snackbarText.value = `Le ${data.type ?? 'regime'}  d'absence ${data.name} a bien été crée`;
        isSnackbarTopVisible.value = true;
        isDrawerOpen.value = false

        console.log(activeTab.value);

        switch (activeTab.value) {
            case 'regimes':
                resource.icon = 'tabler-map-pin-filled'
                regimeList.push(resource)
                break;

            case 'types':
                resource.icon = 'tabler-ankh'
                typeList.push(resource)
                break;

            default:
                break;
        }
    }, 1000);
}
// Sites
const regimeList = reactive([
    { id: 1, name: 'kin-01', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
    { id: 2, name: 'kin-02', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
    { id: 3, name: 'kin-03', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
    { id: 4, name: 'kin-04', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
]);

// Departments
const typeList = reactive([
    { id: 1, name: 'kin-01', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
    { id: 2, name: 'kin-02', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
    { id: 3, name: 'kin-03', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
    { id: 4, name: 'kin-04', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
]);

const navigations = [
    { id: 1, title: 'Régimes absences', tab: 'regimes', icon: 'tabler-users', items: [] },
    { id: 2, title: 'Types absences', tab: 'types', icon: 'tabler-users', items: [] }
];

const status = reactive([{ title: 'Active', value: 'active' }, { title: 'Inactive', value: 'inactive' }, { title: 'Pending', value: 'pending' }]);

const resources = ref(regimeList);
// switch components
const switchComponent = function (val) {

    switch (val) {

        case 'types':
            currentComponent.value = types
            resources.value = typeList;
            break;
        case 'regimes':
            currentComponent.value = regimes
            resources.value = regimeList;
            break;

        default:
            break;
    }
}
// show detail list
const showDetail = function (item) {
    let uri = 'settings-absences-pages';
    uri = `${uri}-${activeTab.value}`;
    router.push({ name: uri, query: { id: item.id, name: item.name } })
}
watch(() => activeTab.value, (current, last) => {
    console.log(activeTab.value);
    switchComponent(activeTab.value);
});
watch(route, (e) => {
    activeTab.value = route.params.tab;
});

// 
const handleClick = function (e) {
    router.push(e);
};
const back = function() {
  router.go(-1)
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
                        <h4>{{ route.query.name }}</h4>
                    </div>
                    <h4>Régimes Absence</h4>
                </div>
            </template>
        </VCard>
    </VCol>
    <VCol md="3">
        <VCard class="mt-6">
          <VCardText>
            <pageContentNav @click="handleClick" :data="navigations" />

          </VCardText>
        </VCard>
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
    <drawer v-model:isDrawerOpen="isDrawerOpen" :tab="activeTab" @on-save="create" :key="activeTab"/>
    <!-- alert notification -->
    <VSnackbar v-model="isSnackbarTopVisible" location="top">
    {{snackbarText}}
    </VSnackbar>
</VRow>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
