<script setup>
import ownership from '@/views/account/AccountManagement.vue'
import overview from '@/views/account/AccountProfile.vue'
import localisation from '@/views/account/languesDevises.vue'
import pageContentNav from '@/pages/components/page-content-nav.vue'
import {accountMenus} from '@/helpers/settings-nav'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const activeTab = ref(route.params.tab)

const components = {
  ownership: ownership,
  overview: overview,
  localisation: localisation
}

let currentComponent = components[route.params.tab];

const handleClick = function (e) {
    router.push(e);
};

watch(route, (to) => {
    currentComponent = components[route.params.tab];
   
}, { flush: 'pre', immediate: true, deep: true })

const back = function () {
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

                    <h4>Account</h4>
                </div>
            </template>
        </VCard>
    </VCol>
    <VCol md="3">
        <pageContentNav @click="handleClick" :data="accountMenus" class="mt-6" />
    </VCol>
    <VCol md="9">
        <VWindow v-model="activeTab" class="mt-6 disable-tab-transition" :touch="false">
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
