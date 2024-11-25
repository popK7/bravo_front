<script setup>
import list from "@/views/contracts/tables/index.vue"

import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/contracts/drawer.vue'

const tab = ref(null);
const isDrawerVisible = ref(false) 

const handleAction = function(data, action) {
  console.log(action);
  switch (action) {
    case 'edit':
      action = "update_contract"
      break;
  
    default:
      action = "add_contract"
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
            <add-resource title="Les contrats" @on-click="showDrawer('add_contract')"/>
        </template>
    </VCard>
    <list @on-action="handleAction"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab"/>
</div>
</template>

