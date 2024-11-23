<script setup>
import pageContentNav from '@/pages/components/page-content-nav.vue'
import general from './general.vue'
import assign from './assign.vue'
import deleteDepartment from './delete.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();

const currentComponent = ref(general);
const handleClick = function(component, value) {
  currentComponent.value = component;
}
const navigations = [
    { id: 1, title: 'Général', value: 'general', component: general, icon: 'tabler-users', items: [] },
    { id: 2, title: 'Assigner', value: 'assign', component: assign, icon: 'tabler-users', items: [] },
    { id: 3, title: 'Supprimer', value: 'supprimer', component: deleteDepartment, icon: 'tabler-trash', items: [] }
];

const back = function() {
  router.go(-1);
};
</script>
<template>
<div>
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
                      
                      <h4>Regimes d'absences</h4>
                    </div>
                </template>
            </VCard>
        </VCol>
    </VRow>
    <VRow>
        <VCol cols="4" md="4">
            <VCard>
                <VCardText>
                    <pageContentNav @click="handleClick" :data="navigations" />
                </VCardText>
            </VCard>

        </VCol>
        <VCol cols="8" md="8">
          <component :is="currentComponent" :key="currentComponent"></component>
        </VCol>
    </VRow>
</div>
</template>
