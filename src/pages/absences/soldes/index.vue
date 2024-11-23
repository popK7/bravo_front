<script setup>
import list from "@/views/absences/tables/Soldes.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/absences/drawer.vue'

const tab = ref(null);
const isDrawerVisible = ref(false)

const handleAction = function(item, action) {
  switch (action) {
    case 'edit':
      showDrawer('update_solde');
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
            <add-resource title="Les soldes" @on-click="showDrawer('update_solde')"/>
        </template>
    </VCard>
    <list @on-action="handleAction"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab"/>
</div>
</template>

