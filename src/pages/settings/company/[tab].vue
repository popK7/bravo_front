<script setup>

import ownership  from '@/views/account/AccountManagement.vue'
import overview from '@/views/account/AccountProfile.vue'
import localisation from '@/views/account/languesDevises.vue'
import pageContentNav from '@/pages/components/page-content-nav.vue'

import { useRoute, useRouter } from 'vue-router'

import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const route = useRoute()
const router = useRouter()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  {
    title: 'Gestion du compte',
    icon: 'tabler-users',
    tab: 'ownership',
    component: ownership
  },
  {
    title: 'Fiche de l\'entreprise',
    icon: 'tabler-lock',
    tab: 'overview',
    component: overview
  },
  {
    title: 'Langue et devise',
    icon: 'tabler-file-text',
    tab: 'localisation',
    component: localisation
  },
];
const tab = tabs.find((e) => e.tab === route.params.tab);

const currentComponent = ref(tab.component)

const managers = [{
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
]

const cities = [
    { value: 1, title: 'Kinshasa' },
    { value: 2, title: 'Celebao' },
    { value: 3, title: 'Matete' },
];

const countries = [
    { value: 1, title: 'Maroc' },
    { value: 2, title: 'Sénégal' },
    { value: 3, title: 'Guinée' },
    { value: 4, title: 'Congo' },
];

const navigations = [
    { id: 1, title: 'Gestion du compte', value: 'ownership', component: 'ownership', icon: 'tabler-users', items: [] },
    { id: 2, title: 'Fiche de l\'entreprise', value: 'overview', component: 'overview', icon: 'tabler-users', items: [] },
    { id: 3, title: 'Langue et devise', value: 'localisation', component: 'localisation', icon: 'tabler-settings', items: [] }
];

const status = [{ title: 'Active', value: 'active' }, { title: 'Inactive', value: 'inactive' }, { title: 'Pending', value: 'pending' }];
// switch components
const switchComponent = function (val) {
  console.log(val);
switch (val) {
    
    case 'ownership':
        console.log(1);
        currentComponent.value = ownership
        break;
    case 'overview':
        console.log(2);
        currentComponent.value = overview 
        break;
    case 'localisation':
        console.log(3);
        currentComponent.value = localisation
        break;

    default:
        break;
}
}

watch(route, (e) =>{
  activeTab.value = route.params.tab;
});

watch(() => activeTab.value, (current, last) => {
    switchComponent(current);
});

const handleClick = function(e) {
  router.push(e);
};

</script>

<template>

  <VRow>
    <VCol md="3">
      <pageContentNav @click="handleClick" :data="navigations" class="mt-6"/>
    </VCol>
    <VCol md="9">
      <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem :value=activeTab> 
        <component :is="currentComponent"></component>
      </VWindowItem>
    </VWindow>
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
