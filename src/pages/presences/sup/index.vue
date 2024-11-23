<script setup>
import list from "@/views/presences/tables/SupHours.vue"

import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/presences/drawer.vue'

const tab = ref(null);
const isDrawerVisible = ref(false)

const handleAction = function(item, action) {
  switch (action) {
    case 'edit':
      showDrawer('edit_sup_hours');
      break;
    case 'delete':
      // code
      break;
  
    default:
      break;
  }
}
const showDrawer = function (item) {
  tab.value = item;
  isDrawerVisible.value = true
};
</script>

<template>
<div>
   <!-- template -->
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Heures suplémentaires" @on-click="showDrawer('sup_hours')" :key="tab"/>
        </template>
    </VCard>
    <!-- list -->
    <list @onAction="handleAction"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab"/>
</div>
</template>
