<script setup>
import list from "@/views/badges/tables/Badges.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/badges/Drawer.vue'

const isDrawerVisible = ref(false)

const showDrawer = function() {
  isDrawerVisible.value = true;
};
</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Les badges d'accès" @on-click="showDrawer"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list />
    <!-- drawer -->
    <drawer tab="add_badge" v-model:isDrawerOpen="isDrawerVisible" />
</div>
</template>





