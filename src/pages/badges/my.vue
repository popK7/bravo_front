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
            <h4>Mes badges d'accès</h4>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list />
    <!-- drawer -->
    <drawer tab="add_badge" v-model:isDrawerOpen="isDrawerVisible" />
</div>
</template>





