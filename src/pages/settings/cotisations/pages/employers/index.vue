<script setup>
import pageContentNav from '@/pages/components/page-content-nav.vue'
import general from './general.vue'
import delete_ from './delete.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();

const currentComponent = ref(general);
const tab = ref();
const components = {
  general,
  delete_
}
const handleClick = function(tab) {
  currentComponent.value = components[tab];
}
const navigations = [
    { id: 1, title: 'Général', tab: 'general', icon: 'tabler-users', items: [] },
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
                      
                      <h4>Cotisation Patronale</h4>
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
          <component :is="currentComponent" />
        </VCol>
    </VRow>
</div>
</template>
