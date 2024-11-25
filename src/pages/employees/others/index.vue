<script setup>
import list from "@/views/others/tables/index.vue"

import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/others/drawer.vue'

const isDrawerVisible = ref(false) 
const tab = ref(null);

const handle = function(data, action) {
  switch (action) {
    case 'edit':
      action = "update_other"
      break;
  
    default:
      action = "add_other"
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
            <add-resource title="Les autres documents" @on-click="showDrawer('add_other')"/>
        </template>
    </VCard>
    <list @on-action="handle"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab"/>
</div>
</template>

