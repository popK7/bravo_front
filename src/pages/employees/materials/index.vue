<script setup>
import list from "@/views/products/tables/Material.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/products/drawer.vue'

const tab = ref(null);
const isDrawerVisible = ref(false)

const handleAction = function(data, action) {
  console.log(action);
  switch (action) {
    case 'edit':
      action = "edit_assign_product"
      break;
  
    default:
      action = "assign_product"
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
            <add-resource title="Materiels ok" @on-click="showDrawer('assign_product')"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list @on-action="handleAction"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab"/>
</div>
</template>




