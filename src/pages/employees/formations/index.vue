<script setup>
import list from "@/views/formations/tables/Formations.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/formations/drawer.vue'

const tab = ref('assign_formation');
const isDrawerVisible = ref(false)

const handleAction = function(data, action) {
  console.log(action);
  switch (action) {
    case 'edit':
      action = "update_assign_formation"
      break;
  
    default:
      action = "assign_formation"
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
            <add-resource title="Les Formations tok" @on-click="showDrawer('assign_formation')"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list @on-action="handleAction"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab"/>
</div>
</template>


