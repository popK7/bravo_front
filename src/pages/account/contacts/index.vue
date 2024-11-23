<script setup>
import list from "@/views/contacts/tables/index.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/contacts/drawer.vue'

const isDrawerVisible = ref(false)

const showDrawer = function() {
  isDrawerVisible.value = true;
};
</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Contacts principals" @on-click="showDrawer"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list />
    <!-- drawer -->
    <drawer tab="add_contact" v-model:isDrawerOpen="isDrawerVisible" />
</div>
</template>




