<script setup>
import addCotisation from "@/views/cotisations/cotisationDrawer.vue"

import cotisationsEmployers from '@/views/cotisations/employers.vue'
import cotisationsEmployees from '@/views/cotisations/employees.vue'

import pageContentNav from '@/pages/components/page-content-nav.vue'

import { useRoute } from 'vue-router';

const uris = {
    'employers': cotisationsEmployers,
    'employees': cotisationsEmployees,

}
const route = useRoute()
const currentComponent = ref(uris[route.params.tab])
const activeTab = ref(route.params.tab)

const isDrawerOpen = ref(false)
const isDepartmentShowDrawer = ref(false)
const finishedAction = ref(false)

const isSnackbarTopVisible = ref(false);
const snackbarText = ref(null);

const router = useRouter()

const showDrawer = function (e) {
    isDrawerOpen.value = true
}

const showAlert = ref(false);

// employees cotisation
const employeesLis = reactive([
    { id: 1, name: 'kin-01', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
    { id: 2, name: 'kin-02', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
    { id: 3, name: 'kin-03', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
    { id: 4, name: 'kin-04', description: '4, rue de la fonde n°23', icon: "tabler-map-pin-filled", total: 6 },
]);

// employers cotisation
const employersList = reactive([
    { id: 1, name: 'kin-01', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
    { id: 2, name: 'kin-02', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
    { id: 3, name: 'kin-03', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
    { id: 4, name: 'kin-04', description: '4, rue de la fonde n°23', icon: "tabler-ankh", total: 6 },
]);

const navigations = [
    { id: 1, title: 'Salariales', tab: 'employees', icon: 'tabler-users', items: [] },
    { id: 2, title: 'Patronales', tab: 'employers', icon: 'tabler-users', items: [] }
];

const status = reactive([{ title: 'Active', value: 'active' }, { title: 'Inactive', value: 'inactive' }, { title: 'Pending', value: 'pending' }]);

const resources = ref(employeesLis);
// switch components
const switchComponent = function (val) {

    switch (val) {

        case 'employers':
            currentComponent.value = cotisationsEmployers
            resources.value = employersList;
            break;
        case 'employees':
            currentComponent.value = cotisationsEmployees
            resources.value = employeesLis;
            break;

        default:
            break;
    }
}
// show detail list
const showDetail = function (item) {
    let uri = 'settings-cotisations-pages';
    uri = `${uri}-${activeTab.value}`;
    router.push({ name: uri, query: item })
}
// watch route change
watch(() => activeTab.value, (current, last) => {
    switchComponent(current);
});

watch(route, (e) => {
    activeTab.value = route.params.tab;
});

// 
const handleClick = function (e) {
    router.push(e);
};
const back = function () {
    router.go(-1)
};

const createCotisation = function (data) {
    console.log(finishedAction)
    setTimeout(() => {
        let resource = {
            id: 9,
            name: data.name,
            description: data.description ?? '--',
            icon: "tabler-map-pin-filled",
            total: 9
        }

        snackbarText.value = `La cotisation ${data.name} a bien été crée`;
        finishedAction.value = true;
        showAlert.value = true;
        isDrawerOpen.value = false
        isSnackbarTopVisible.value = true

        switch (activeTab.value) {
            case 'employees':
                resource.icon = 'tabler-map-pin-filled'
                employeesLis.push(resource)
                break;

            case 'employers':
                resource.icon = 'tabler-ankh'
                employersList.push(resource)
                break;

            default:
                break;
        }
        console.log(finishedAction)

    }, 1000);

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
                    <h4>Cotisations</h4>
                </div>
            </template>
        </VCard>
    </VCol>
    <VCol md="3">
        <pageContentNav @click="handleClick" :data="navigations" class="mt-6" />
    </VCol>
    <VCol md="9">
        <VWindow v-model="activeTab" class="mt-6 disable-tab-transition" :touch="false">
            <!-- Sites##Departments#Positions -->
            <VWindowItem :value="activeTab">
                <VRow>
                    <VCol md="12" offset-md="#">
                        <component :is="currentComponent" :data="resources" @on-selected="showDetail" @onShowDrawer="showDrawer"></component>
                    </VCol>
                </VRow>

            </VWindowItem>

        </VWindow>
    </VCol>
    <!-- Cotisation Drawer -->
    <add-cotisation v-model:isDrawerOpen="isDrawerOpen" :tab="activeTab" @on-save="createCotisation" />
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
