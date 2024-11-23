<script setup>
import list from "@/views/paies/tables/Remunerations.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import drawer from '@/views/paies/payDrawer.vue'
import { reactive } from "vue";

const isDrawerVisible = ref(false)
let form = reactive();
const key = ref(null);

const showRow = function(data) {
  form = data; 
  key.value= Math.random();
  isDrawerVisible.value = true;
}

const showDrawer = function() {
  isDrawerVisible.value = true;
};

</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Les Rémunerations" @on-click="showDrawer"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list @on-show-row="showRow"/>
    <!-- drawer -->
    <drawer tab="advantage" v-model:isDrawerOpen="isDrawerVisible" :form="form" :key="key"/>
</div>
</template>

