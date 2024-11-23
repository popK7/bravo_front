<script setup>
import list from "@/views/presences/tables/TimeSheets.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/presences/drawer.vue'

const isDrawerVisible = ref(false)
const tab = ref('sheet')

const tableActions = function(item, action){
  switch (action) {
    case 'edit':
      showDrawer('edit_sheet');
      break;
    case 'download':
      console.log('dodo');
      break;
    default:
      break;
  }
 
}

const showDrawer = function(item) {
  tab.value = item;
  isDrawerVisible.value = true;
};

</script> 

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Feuille de temps" @on-click="showDrawer('sheet')"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list 
    @on-action="tableActions"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab" />
</div>
</template>
