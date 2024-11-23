<script setup>
import pageContentNav from '@/pages/components/page-content-nav.vue'
import general from './general.vue'
import assign from './assign.vue'
import deleteSite from './delete.vue'

import { useRouter } from 'vue-router'
import { reactive } from 'vue';

const router = useRouter();
const route = useRoute()
const currentComponent = ref(general);
const resource = reactive({
    id: null,
    name: null,
    address: null,
    city: null,
    country: null,
    status: null,
    manager: null,
    team: []

});
const handleClick = function (component, value) {
    const url = `sites/${value}`;
    currentComponent.value = component;
}
const props = defineProps({
    site_name: {
        type: String,
        default: '***'
    }
})
const navigations = [
    { id: 1, title: 'Général', value: 'general', component: general, icon: 'tabler-users', items: [] },
    { id: 2, title: 'Assigner', value: 'assign', component: assign, icon: 'tabler-users', items: [] },
    { id: 3, title: 'Supprimer', value: 'supprimer', component: deleteSite, icon: 'tabler-trash', items: [] }
];
const back = function () {
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
                            <h4 class="mt-1">{{ route.query.name }}</h4>
                        </div>

                        <h4>Sites</h4>
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
            <component :is="currentComponent" :form="resource"></component>
        </VCol>
    </VRow>
</div>
</template>
