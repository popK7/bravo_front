<script setup>
import list from "@/views/paies/tables/Cycles.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/paies/payDrawer.vue'

const tab = ref(null);
const isDrawerVisible = ref(false)

const handleAction = function(data, action) {
  console.log(action);
  switch (action) {
    case 'edit':
       action = 'edit_cycle'
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
            <add-resource title="Les cycles de paie" @on-click="showDrawer('cycle')"/>
        </template>
    </VCard>
    <!-- cycles list -->
    <list @on-action="handleAction"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" />
</div>
</template>


