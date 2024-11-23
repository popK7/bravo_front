<script setup>

import {menus} from "@/helpers/employee-nav"
import { useTheme } from 'vuetify'
import { useRoute } from "vue-router"
import MultiSelect from '@/pages/components/multi-select.vue'
import pageContentNav from '@/pages/components/page-content-nav.vue'
import { useUserListStore } from '@/views/apps/user/useUserListStore'

import Profile from '@/views/apps/user/view/Profile.vue'
import Resume from '@/views/employees/Resume.vue'
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

import Materials from '@/pages/materials/index.vue'
import Expenses from '@/pages/expenses/index.vue'
import Badges from '@/pages/badges/index.vue'
import Formations from '@/pages/formations/index.vue'
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

const components = {
    'profile': Resume,
    'profil_data': ProfileData,
    'work_information': WorkInfoData,
    'informations': InformationsData,
    'address': WorkerAdressesData,
    'urgence_contact': WorkerUrgencyContactsData,
    'social_media': WorkerSocialMediaData,
    'enterprise_structure': WorkerStructureData,
    'sup_hours': SupHours,
    'time_sheet': TimeSheet,
    'hour_regime': hourRegime,
    'global_view': GlobalView,
    'soldes': Solde,
    'demands': Demands,
    'my_pay': MyPay,
    'information_paie': Informations,
    'remunerations': Remunerations,
    'material': Materials,
    'expense_notes': Expenses,
    'access_badge': Badges,
    'formations': Formations,
    'departement_note': DepartementNote,
    'contrats': EmployeeContrats,
    'certificats': EmployeeCertificats,
    'another_docs': EmployeeAnotherDocs,
    'historique': EmployeeHistorics,
    'compte': Compte,

}

const route = useRoute()
const router = useRouter();
const userData = ref(null)
const userListStore = useUserListStore()

const hasUserChanged = ref(false)
let currentTabComponent = ref(components[route.query?.tab ?? 'profile']);

const handleClick = function (tab) {
    router.push({ name: 'employees-id', params: { id: route.params.id }, query: { tab: tab } })
}

const fetchUser = function () {
    userListStore.fetchUser(Number(route.params.id)).then(response => {
        userData.value = response.data
    }).finally(() => {
    })
}

const chengeEmployee = function (user) {
    hasUserChanged.value = true;
    router.push({ name: 'employees-id', params: { id: user.code }, query: { tab: route.query.tab } })
};

watch(route, (to) => {
    currentTabComponent = ref(components[route.query?.tab ?? 'profil_data']);
    if(hasUserChanged) {
      fetchUser();
      hasUserChanged.value = false;
    }
   
}, { flush: 'pre', immediate: true, deep: true })

fetchUser();

</script>

<template>
<VRow class="#">
    <vCol md="12" v-if="$can('Admin')">
        <VCard>
            <VCardText>
                <div class="d-flex ">
                    <h2>Employé</h2>
                    <div class="ml-5">
                        <MultiSelect @onChange="chengeEmployee" />
                    </div>

                </div>
            </VCardText>

        </VCard>
    </vCol>
    <VCol md="12">
      <profile :user-data="userData"/>
    </VCol>
    <!-- 👉 Employee menu -->
    <VCol cols="12" md="3">
      <pageContentNav @click="handleClick" :data="menus" />
    </VCol>

    <!-- 👉 Employee content -->
    <VCol cols="12" md="9">
        <div v-if="true">
            <!-- dynamic view component -->
            <component v-if="userData" :is="currentTabComponent" :user-data="userData" :key="route.query.tab"/>
            <!-- page spinner -->
            <VCard v-else class="is_loading_spinner">
                <h4 class="text-center">No data</h4>
            </VCard>
        </div>

    </VCol>

</VRow>

</template>

<route lang="yaml">
  meta:
    action: read
    subject: AclDemo
  </route>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
.is_loading_spinner {
    padding: 50px;
    display: flex;
    justify-content: center;
}
</style>
