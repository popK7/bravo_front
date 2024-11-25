<script setup>
import list from "@/views/expenses/tables/Notes.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/expenses/drawer.vue'

const isDrawerVisible = ref(false)
const tab = ref(null);

const handleAction = function(data, action) {
  switch (action) {
    case 'edit':
      action = 'edit_expense_demand'
      break;
  
    default:
      break;
  }
  showDrawer(action);
}
const showDrawer = function(action) {
  tab.value = action;
  isDrawerVisible.value = true;
};
</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Notes de frais" @on-click="showDrawer('expence_demand')"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list @on-action="handleAction"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab"/>
</div>
</template>



