<script setup>
import list from "@/views/contracts/tables/index.vue"

import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/contracts/drawer.vue'

const isDrawerVisible = ref(false) 

const showDrawer = function() {
  isDrawerVisible.value = true;
};

</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Les contrats" @on-click="showDrawer"/>
        </template>
    </VCard>
    <list />
    <!-- drawer -->
    <drawer tab="add_contract" v-model:isDrawerOpen="isDrawerVisible" />
</div>
</template>

