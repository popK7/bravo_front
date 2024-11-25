<script setup>
import list from "@/views/badges/tables/Badges.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/badges/Drawer.vue'

const tab = ref(null);
const isDrawerVisible = ref(false)

const handleAction = function(data, action) {
  switch (action) {
    case 'edit':
      action = "edit_assign_badge"
      break;
  
    default:
      action = "assign_badge"
      break;
  }
  showDrawer(action);
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
            <add-resource title="Les badges d'accès ok" @on-click="showDrawer('assign_badge')"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list @on-action="handleAction"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab"/>
</div>
</template>





