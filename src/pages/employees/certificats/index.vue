<script setup>
import list from "@/views/certificats/tables/index.vue"

import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/certificats/drawer.vue'

const isDrawerVisible = ref(false) 
const tab = ref(null);

const handleAction = function(data, action) {
  switch (action) {
    case 'edit':
      action = "update_certificat";
      break;
  
    default:
      action = "add_certificat";
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
            <add-resource title="Les certificats" @on-click="showDrawer('add_certificat')"/>
        </template>
    </VCard>
    <list @on-action="handleAction"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab"/>
</div>
</template>

