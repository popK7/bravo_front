<script setup>
import pageContentNav from '@/pages/components/page-content-nav.vue'
import general from './general.vue'
import assign from './assign.vue'
import deleteDepartment from './delete.vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const route = useRoute();

const currentComponent = ref(general);
const tab = ref(null)
const components = {
  general: general,
  assign: assign,
  delete: deleteDepartment
}
const handleClick = function(tab) {
  currentComponent.value = components[tab];
}
const back = function() { route.go(-1)}
const navigations = [
    { id: 1, title: 'Général', tab: 'general', icon: 'tabler-users', items: [] },
    { id: 2, title: 'Assigner', tab: 'assign', icon: 'tabler-users', items: [] },
    { id: 3, title: 'Supprimer', tab: 'delete', icon: 'tabler-trash', items: [] }
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
                            <button class="mr-2" @click="router.go(-1);">
                              <VIcon size="30" icon="tabler-square-arrow-left" />
                            </button>
                            <h4 class="mt-1">{{ route.query.name }}</h4>
                        </div>

                        <h4>Départements</h4>
                    </div>
                </template>
            </VCard>
        </VCol>
    </VRow>
    <VRow>
        <VCol cols="4" md="4">
            <VCard>
                <VCardText>
                    <pageContentNav @click="handleClick" :data="navigations" :key="tab"/>
                </VCardText>
            </VCard>

        </VCol>
        <VCol cols="8" md="8">
          <component :is="currentComponent"></component>
        </VCol>
    </VRow>
</div>
</template>
