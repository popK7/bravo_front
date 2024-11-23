<script setup>
import list from "@/views/formations/tables/Formations.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/formations/drawer.vue'

const isDrawerVisible = ref(false)

const showDrawer = function() {
  isDrawerVisible.value = true;
};

</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Les Formations" @on-click="showDrawer"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list />
    <!-- drawer -->
    <drawer tab="add_formation" v-model:isDrawerOpen="isDrawerVisible" />
</div>
</template>


