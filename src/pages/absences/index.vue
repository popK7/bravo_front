<script setup>
import list from "@/views/absences/tables/Demands.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/absences/drawer.vue'

const tab = ref(null);
const isDrawerVisible = ref(false)

const handleAction = function(item, action) {
  switch (action) {
    case 'edit':
      showDrawer('update_demand');
      break;
  
    default:
      break;
  }
} 
const showDrawer = function(action) {
  tab.value = action
  isDrawerVisible.value = true;
};

</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Les Demandes d'absences" @on-click="showDrawer('demand')"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list @on-action="handleAction" />
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab"/>
</div>
</template>

