<script setup>
import pageContentNav from '@/pages/components/page-content-nav.vue'
import general from './general.vue'
import assign from './assign.vue'
import deleteSite from './delete.vue'
import { useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();
const currentComponent = ref(general);

const tab = ref(null);
const components = {
  general,
  assign,
  delete_
}
const handleClick = function(tab) {
  currentComponent.value = components[tab];
}
const navigations = [
    { id: 1, title: 'Général', tab: 'general', icon: 'tabler-users', items: [] },
    { id: 2, title: 'Assigner', tab: 'assign', icon: 'tabler-users', items: [] },
    { id: 3, title: 'Supprimer', tab: 'delete_', icon: 'tabler-trash', items: [] }
];
</script>
<template>
<div>
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
                      
                      <h4>Cotisation Salariale</h4>
                    </div>
                </template>
            </VCard>
        </VCol>
    </VRow>
    <VRow>
        <VCol cols="3" md="3">
            <VCard>
                <VCardText>
                    <pageContentNav @click="handleClick" :data="navigations" />
                </VCardText>
            </VCard>

        </VCol>
        <VCol cols="9" md="9">
          <component :is="currentComponent" :key="tab"/>
        </VCol>
    </VRow>
</div>
</template>
