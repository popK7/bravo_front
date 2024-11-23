<script setup>
import list from "@/views/paies/tables/Nets.vue"
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
};

</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
           <h4>Salaires net</h4>
        </template>
    </VCard>
    <!-- timesheet list -->
    <list @on-show-row="showRow"/>
    <!-- drawer -->
    <drawer tab="advantage" v-model:isDrawerOpen="isDrawerVisible" :form="form" :key="key"/>
</div>
</template>

