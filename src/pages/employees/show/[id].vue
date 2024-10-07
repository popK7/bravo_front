<script setup>
import { useTheme } from 'vuetify'

import { useUserListStore } from '@/views/apps/user/useUserListStore'

import Profile from '@/views/apps/user/view/Profile.vue'
import SupHours from '@/views/apps/user/view/presence/SupHours.vue'
import Presence from '@/views/apps/user/view/UserTabBillingsPlans.vue'
import hourRegime from '@/views/apps/user/view/presence/hourRegime.vue'
import TimeSheet from '@/views/apps/user/view/presence/TimeSheet.vue'

import GlobalView from '@/views/apps/user/view/absence/GlobalView.vue'
import Solde from '@/views/apps/user/view/absence/Solde.vue'
import Demands from '@/views/apps/user/view/absence/AbsenceRegime.vue'

import Informations from '@/views/apps/user/view/pay/Informations.vue'
import Remunerations from '@/views/apps/user/view/pay/Remunerations.vue'
import MyPay from '@/views/apps/user/view/pay/MyPay.vue'

import Materials from '@/pages/materials/list.vue'
import Expenses from '@/pages/expenses/list.vue'
import Badges from '@/pages/badges/list.vue'
import Formations from '@/pages/formations/list.vue'
import DepartementNote from '@/views/employees/notes-departement.vue'

import EmployeeContrats from '@/views/employees/EmployeeContrats.vue'
import EmployeeCertificats from '@/views/employees/EmployeeCertificats.vue'
import EmployeeAnotherDocs from '@/views/employees/EmployeeAnotherDocs.vue'
import EmployeeHistorics from '@/views/employees/EmployeeHistorics.vue'

import Compte from '@/views/employees/Compte.vue'

import ProfileData from '@/views/apps/user/view/data/Profile.vue'
import WorkInfoData from '@/views/apps/user/view/data/WorkInfo.vue'
import WorkerStructureData from '@/views/apps/user/view/data/workerStructure.vue'
import InformationsData from '@/views/apps/user/view/data/Informations.vue'
import WorkerAdressesData from '@/views/apps/user/view/data/workerAddresses.vue'
import WorkerUrgencyContactsData from '@/views/apps/user/view/data/workerUrgencyContacts.vue'
import WorkerSocialMediaData from '@/views/apps/user/view/data/WorkerSocialMedia.vue'

import { useRoute } from "vue-router"
import pageContentNav from '@/pages/components/page-content-nav.vue'
import MultiSelect from '@/pages/components/multi-select.vue'

import loader from '@/pages/components/loader.vue'

const route = useRoute()
const router = useRouter();
const userData = ref(null)
let isLoad = ref(true)
const tabs = ref('profile')
let currentTabComponent = ref(Profile)
const vuetifyTheme = useTheme()
const currentTheme = vuetifyTheme.current.value.colors
const isUserInfoEditDialogVisible = ref(false)
const actionInProgress = ref(false) 
const navs = [
    { id: 1, title: 'Profile', value: 'profile', component: Profile, icon: 'tabler-users', items: [] },
    {
        id: 2,
        title: 'Données du profil',
        value: 'profil_data',
        component: Presence,
        icon: 'tabler-clock',
        items: [
            { id: 1, title: "Profil de l'employé", value: 'profil_data', component: ProfileData, icon: 'tabler-file' },
            { id: 2, title: 'Informations emploi', value: 'work_information', component: WorkInfoData, icon: 'tabler-clock' },
            { id: 3, title: "Structure d'entreprise", value: 'enterprise_structure', component: WorkerStructureData, icon: 'tabler-note' },
            { id: 4, title: "Informations", value: 'informations', component: InformationsData, icon: 'tabler-file' },
            { id: 4, title: "Adresse", value: 'address', component: WorkerAdressesData, icon: 'tabler-file' },
            { id: 5, title: "Contact en cas d'urgence", value: 'urgence_contact', component: WorkerUrgencyContactsData, icon: 'tabler-clock' },
            { id: 6, title: "Medias sociaux", value: 'social_media', component: WorkerSocialMediaData, icon: 'tabler-note' }
        ]
    },
    {
        id: 3,
        title: 'Presences',
        value: 'Presence',
        component: Presence,
        icon: 'tabler-clock',
        items: [
            { id: 1, title: 'Feuilles de temps', value: 'Time_sheet', component: TimeSheet, icon: 'tabler-file' },
            { id: 2, title: 'Heures Sup', value: 'Sup_hours', component: SupHours, icon: 'tabler-clock' },
            { id: 3, title: 'Regime Horaire ', value: 'hour_regime', component: hourRegime, icon: 'tabler-note' }
        ]
    },
    {
        id: 4,
        title: 'Absences',
        value: 'Absence',
        component: Presence,
        icon: 'tabler-clock',
        items: [
            { id: 1, title: "Vue d'ensemble", value: 'global_view', component: GlobalView, icon: 'tabler-file' },
            { id: 2, title: "Soldes", value: 'soldes', component: SupHours, icon: 'tabler-clock' },
            { id: 3, title: "Demandes", value: 'demands', component: hourRegime, icon: 'tabler-note' }
        ]
    },
    {
        id: 5,
        title: 'Paies',
        value: 'Pay',
        component: Presence,
        icon: 'tabler-clock',
        items: [
            { id: 1, title: "Information paie", value: 'information_paie', component: SupHours, icon: 'tabler-file' },
            { id: 2, title: "Rémuneration", value: 'remunerations', component: SupHours, icon: 'tabler-clock' },
            { id: 3, title: "Ma paie", value: 'my_pay', component: hourRegime, icon: 'tabler-note' }
        ]
    },
    { id: 6, title: 'Note de frais', value: 'expense_notes', component: Materials, icon: 'tabler-users', items: [] },
    { id: 13, title: 'Materiels', value: 'Material', component: Profile, icon: 'tabler-users', items: [] },
    { id: 7, title: "Badge d'accès", value: 'access_badge', component: Profile, icon: 'tabler-users', items: [] },
    { id: 8, title: 'Formations', value: 'formations', component: Profile, icon: 'tabler-users', items: [] },
    { id: 9, title: "Note du departement RH", value: 'departement_note', component: Profile, icon: 'tabler-users', items: [] },
    {
        id: 10,
        title: 'Documents',
        value: 'Documents',
        component: Presence,
        icon: 'tabler-clock',
        items: [
            { id: 1, title: 'Contrats', value: 'contrats', component: null, icon: 'tabler-file' },
            { id: 2, title: 'Certificats', value: 'certificats', component: null, icon: 'tabler-clock' },
            { id: 3, title: 'Autre documents ', value: 'another_docs', component: null, icon: 'tabler-note' }
        ]
    },
    { id: 11, title: "Historique", value: 'historique', component: Profile, icon: 'tabler-users', items: [] },
    { id: 11, title: "Compte", value: 'Compte', component: Profile, icon: 'tabler-users', items: [] },

]
const statisticsVertical = {
    title: 'Revenue Generated',
    color: 'success',
    icon: 'tabler-credit-card',
    stats: '97.5k',
    height: 97,
    series: [{
        data: [
            300,
            350,
            330,
            380,
            340,
            400,
            380,
        ],
    }],
    chartOptions: {
        chart: {
            height: 110,
            type: 'area',
            parentHeightOffset: 0,
            toolbar: { show: false },
            sparkline: { enabled: true },
        },
        tooltip: { enabled: false },
        markers: {
            colors: 'transparent',
            strokeColors: 'transparent',
        },
        grid: { show: false },
        colors: [currentTheme.success],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.8,
                opacityFrom: 0.6,
                opacityTo: 0.1,
            },
        },
        dataLabels: { enabled: false },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        xaxis: {
            show: true,
            lines: { show: false },
            labels: { show: false },
            stroke: { width: 0 },
            axisBorder: { show: false },
        },
        yaxis: {
            stroke: { width: 0 },
            show: false,
        },
    },
}
const hasLoadUserData = ref(false);
const userListStore = useUserListStore()
const handleClick = function (component, type) {
    console.log(type, component);
    currentTabComponent.value = component
    router.push({ name: 'employees-show-id', params: { id: route.params.id }, query: { tabs: type } })
}
const fetchUser = function () {
    userListStore.fetchUser(Number(route.params.id)).then(response => {
        userData.value = response.data
        hasLoadUserData.value = true
    }).finally(() => {
        setTimeout(() => {
            isLoad.value = false;
        }, 3000);

    })
}

const components = {
    'profile': Profile,
    'profil_data': ProfileData,
    'work_information': WorkInfoData,
    'informations': InformationsData,
    'address': WorkerAdressesData,
    'urgence_contact': WorkerUrgencyContactsData,
    'social_media': WorkerSocialMediaData,
    'enterprise_structure': WorkerStructureData,
    'Sup_hours': SupHours,
    'Time_sheet': TimeSheet,
    'hour_regime': hourRegime,
    'global_view': GlobalView,
    'soldes': Solde,
    'demands': Demands,
    'my_pay': MyPay,
    'information_paie': Informations,
    'remunerations': Remunerations,
    'Material': Materials,
    'expense_notes': Expenses,
    'access_badge': Badges,
    'formations': Formations,
    'departement_note': DepartementNote,
    'contrats': EmployeeContrats,
    'certificats': EmployeeCertificats,
    'another_docs': EmployeeAnotherDocs,
    'historique': EmployeeHistorics,
    'Compte': Compte,

}
watch(route, (to) => {
    const queries = route.query;
    const tab = queries.tabs;
    isLoad.value = true;
    const component = components[tab];
    currentTabComponent.value = component
    fetchUser();
}, { flush: 'pre', immediate: true, deep: true })
fetchUser();

const handleAction = function (data) {
    console.log(data, 'test 25');
    actionInProgress.value = true;
    setTimeout(() => {
        actionInProgress.value = false
    }, 3000);
}

const viewDetail = function (data) {
    switch (data.type) {
        case "attendance":
            isUserInfoEditDialogVisible.value = true
            break;

        default:
            break;
    }
}

const chengeEmployee = function (user) {
    //handleClick(Profile)
    const user_id = user.code;
    const tab = route.query.tabs;
    router.push({ name: 'employees-show-id', params: { id: user_id }, query: { tabs: tab } })
};
</script>

<template>
<VRow class="#">
    <vCol md="12">
        <VCard>
            <VCardText>
                <div class="d-flex ">
                    <h2>Employé</h2>
                    <div class="ml-5">
                        <MultiSelect @onChange="chengeEmployee"></MultiSelect>
                    </div>

                </div>
            </VCardText>

        </VCard>
    </vCol>
    <!-- 👉 Employee menu -->
    <VCol cols="12" md="3">
        <pageContentNav @click="handleClick" :data="navs" />
    </VCol>

    <!-- 👉 Employee content -->
    <VCol cols="12" md="9" sm="12">
        <div v-if="!isLoad">
            <!-- dynamic view component -->
            <component v-if="userData" :is="currentTabComponent" :user-data="userData" :loader="isLoad" @onshowDetail="viewDetail" @onHandleAction="handleAction"></component>
            <!-- page spinner -->
            <VCard v-else class="is_loading_spinner">
                <h4 class="text-center">No data</h4>
            </VCard>
        </div>
        <VCard v-else-if="isLoad" class="is_loading_spinner">
            <VProgressCircular :size="30" width="3" color="primary" indeterminate class="progress_class" />
        </VCard>

    </VCol>
    <!-- Page loader action handled -->
    <!-- Dialog -->
    <VDialog v-model="actionInProgress" width="300">
        <VCard color="primary" width="300">
            <VCardText class="pt-3">
                proccessing ...
                <VProgressLinear indeterminate class="mb-0" />
            </VCardText>
        </VCard>
    </VDialog>
</VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";

.is_loading_spinner {
    padding: 50px;
    display: flex;
    justify-content: center;
}
</style>
