<script setup>
import list from "@/views/expenses/tables/Notes.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/expenses/drawer.vue'

const isDrawerVisible = ref(false)

const showDrawer = function() {
  isDrawerVisible.value = true;
};
</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Notes de frais" @on-click="showDrawer"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list />
    <!-- drawer -->
    <drawer tab="add_demand" v-model:isDrawerOpen="isDrawerVisible" />
</div>
</template>



