<script setup>
import list from "@/views/paies/tables/Remunerations.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/paies/payDrawer.vue'
import { reactive } from "vue";

const isDrawerVisible = ref(false)
let form = reactive();
const tab = ref(null);

const showRow = function(data, action) {
  form = data; 
  switch (action) {
    case 'edit':
      action = 'edit_remuneration'
      break;
  
    default:
      break;
  }
  showDrawer(action);
}

const showDrawer = function(action) {
  tab.value= action;
  isDrawerVisible.value = true;
};

</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Les Rémunerations" @on-click="showDrawer('advantage')"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list @on-show-row="showRow"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :form="form" :key="tab"/>
</div>
</template>

