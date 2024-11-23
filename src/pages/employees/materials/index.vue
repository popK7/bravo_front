<script setup>
import list from "@/views/products/tables/Material.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/products/drawer.vue'

const isDrawerVisible = ref(false)

const showDrawer = function() {
  isDrawerVisible.value = true;
};
</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Materiels" @on-click="showDrawer"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list />
    <!-- drawer -->
    <drawer tab="add_product" v-model:isDrawerOpen="isDrawerVisible" />
</div>
</template>




