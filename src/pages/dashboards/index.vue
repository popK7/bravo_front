<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lem canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.';
const tabNotificationContent = "Vous n'avez rien à valider";
const responsable = ref("Vous n'avez pas de responsable");
const equipe = ref("Vous n'avez pas de responsable");
import ProgressList from '@/pages/components/progress-list.vue';
import demandNotification from '@/views/dashboard/demands.vue';
import notifications from '@/views/dashboard/notifications.vue';
import manager from '@/views/dashboard/managers.vue';
import presence from '@/views/dashboard/timeTracking.vue';
import absence from '@/views/dashboard/absenceColumn-1.vue';
import myTeams from '@/pages/components/simple-list-6.vue'; 

import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import { reactive } from 'vue';



const teams = [{
        name: 'Marketing',
        teams: [avatar1, avatar2, avatar4, avatar5],
    },
    {
        name: 'Commercial',
        teams: [avatar5, avatar3, avatar6],
    },
]

const demands = reactive([{
        avatar: avatar1,
        name: 'Caroline Black',
        status: 'Online',
        lastVisited: '13 minutes ago',
    },
    {
        avatar: avatar2,
        name: 'Alfred Copeland',
        status: 'Away',
        lastVisited: '11 minutes ago',
    },
    {
        avatar: avatar3,
        name: 'Celia Schneider',
        status: 'Offline',
        lastVisited: '9 minutes ago',
    },
    {
        avatar: avatar4,
        name: 'Max Rogan',
        status: 'In Meeting',
        lastVisited: '28 minutes ago',
    },
])

const notifs = reactive([{
        title: 'Marketing',
        description: "une descriprions de ald cir doruz djrd",
    },
    {
        title: 'Commercial',
        description: "une descriprions de ald cir doruz djrd",
    },
]);

const employees = reactive([
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
    position: 'IT Ing.'
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
    position: 'IT Ing.'
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
    position: 'IT Ing.'
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
    position: 'IT Ing.'
  },
])

const count_notifications = function() {
  const total = props.notifications.length
  return  total 
};
</script>
<template>
<VRow>
  <VCol cols="12"> 
                <VCard>
                    <template #title>
                        <h3>Tableau de bord</h3>
                    </template>
                </VCard>
            </VCol>
    <VCol cols="8">
        <VRow>
            <VCol cols="12">
                <VCard>
                    <VTabs v-model="currentTab">
                        <VTab>
                            <h4>En Attente</h4>
                        </VTab>
                        <VTab>
                            <h4>Notifications</h4>
                        </VTab>
                    </VTabs>

                    <VCardText>
                        <VWindow v-model="currentTab">
                            <VWindowItem v-for="item in 2" :key="item">
                                <demand-notification :items="demands" v-if="item == 1"></demand-notification>
                                <notifications :notifications="notifs" v-if="item == 2"></notifications>
                            </VWindowItem>
                        </VWindow>
                    </VCardText>
                </VCard>
            </VCol>
            <VCol cols="12"> 
                <VCard>
                    <template #title>
                        <h3>Demandes d'autorisation d'absence</h3>
                    </template>
                    <VCardText>
                        <ProgressList></ProgressList>
                    </VCardText>
                </VCard>
            </VCol>
            <VCol cols="12">
                <VCard>
                    <template #title>
                        <h3>Structure d'entreprise</h3>
                    </template>
                    <VCardText>
                        <VRow>
                            <VCol cols="6">
                              <h3 class="mb-3">Responsable</h3>
                              <VDivider />
                              <manager class="mt-3"></manager>
                            </VCol>
                            <VCol cols="6">
                              <h3 class="mb-3">Mes Equipes</h3>
                              <VDivider />
                              <my-teams class="mt-3" :departments="teams"></my-teams>
                            </VCol>
                        </VRow>
                    </VCardText>
                </VCard>
            </VCol>
        </VRow>
    </VCol>
    <VCol cols="4">
        <VRow>
            <VCol cols="12">
                <VCard>
                    <template #title>
                        <div class="d-flex space-between">
                          <h3>lun., 26 août 2024</h3>
                        </div>
                    </template>
                    <VCardText>
                      <presence></presence>
                    </VCardText>
                </VCard>
            </VCol>
            <VCol cols="12">
                <VCard>
                    <template #title>
                        <h3>Absences({{employees.length}})</h3>
                        <span>AUJOURD'HUI</span>
                    </template>
                    <VCardText>
                      <absence :employees="employees"></absence>
                    </VCardText>
                </VCard>
            </VCol>
        </VRow>
    </VCol>
</VRow>
</template>
<style scoped>
.space-between{
  justify-content: space-between;
}
</style>
