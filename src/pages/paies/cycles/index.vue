<script setup>
import list from "@/views/paies/tables/Cycles.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/paies/payDrawer.vue'

const isDrawerVisible = ref(false)

const showDrawer = function() {
  isDrawerVisible.value = true;
};
</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Les cycles de paie" @on-click="showDrawer"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list />
    <!-- drawer -->
    <drawer tab="cycle" v-model:isDrawerOpen="isDrawerVisible" />
</div>
</template>


