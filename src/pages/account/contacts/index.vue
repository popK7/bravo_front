<script setup>
import list from "@/views/contacts/tables/index.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/contacts/drawer.vue'

const isDrawerVisible = ref(false)
const tab = ref(null);

const handle = function(data, action) {
  console.log(action);
  switch (action) {
    case 'edit':
       action = 'update_contact'
      break;
  
    default:
      action = 'add_contact'

      break;
  }
  showDrawer(action)
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
            <add-resource title="Contacts principals" @on-click="showDrawer('add_contact')"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list @on-action="handle"/>
    <!-- drawer -->
    <drawer :tab="tab" v-model:isDrawerOpen="isDrawerVisible" :key="tab"/>
</div>
</template>




