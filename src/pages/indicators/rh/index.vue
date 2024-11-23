<script setup>
import pageContentNav from '@/pages/components/page-content-nav.vue'
import {menus} from "@/helpers/menus"
import dashboard from "@/views/indicators/dashboard.vue"
import seniorities from "@/views/indicators/seniorities.vue"
import absences from "@/views/indicators/absences.vue"
import payrolls from "@/views/indicators/payrolls.vue"
import recrutments from "@/views/indicators/recrutments.vue"
import dismissals from "@/views/indicators/dismissals.vue" 
import taxes from "@/views/indicators/taxes.vue" 




import { useRouter } from 'vue-router'
import { watch } from 'vue';

const router = useRouter();
const route = useRoute();

const components = {
  dashboard: dashboard,
  seniorities: seniorities,
  absences: absences,
  payroll: payrolls,
  recruits: recrutments,
  dismissal: dismissals,
  taxes: taxes
}

let component = ref(components[route.query?.tab ?? 'dashboard']);

const handleClick = function(menu) {
  if(!menu) menu = 'dashboard';
  router.push({ name: 'indicators-rh', query: { tab: menu } })

};

watch(route, (to) => {
    if(route.query.tab) {
      component = ref(components[route.query.tab]);
    }
}, { flush: 'pre', immediate: true, deep: true });

</script>

<template>
  <VRow>
    <VCol md="3">
      <pageContentNav @click="handleClick" :data="menus" />
    </VCol>
    <VCol md="9">
       <VCard class="mb-10">
         <template #title>
          <h3>Indicateurs RH</h3>
         </template>
       </VCard>
       <component :is="component" :key="route.query.tab"/>
    </VCol>
  </VRow>
</template>
