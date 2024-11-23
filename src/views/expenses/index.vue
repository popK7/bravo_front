<script setup>
import { reactive } from "vue";
import expensesNotes from "@/pages/components/listWithIndicator.vue"


const isDrawerOpen = ref(false)

const emit = defineEmits([
    "onShowDrawer",
    "onSelected",
]);
const add = function () {
    emit("onShowDrawer");
}

const selected = function(item) {
  emit("onSelected", item);
}
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }

});
</script>
<template>
<VCard>
    <template #title>
        <VRow>
            <VCol md="12">
                <div class="d-flex justify-space-between">
                    <h4>Les notes</h4>
                    <VBtn size="small" @click="add">
                        Ajouter
                        <VIcon icon="tabler-square-check"  />
                        
                    </VBtn>
                </div>
            </VCol>
        </VRow>

    </template>
    <VCardText>
        <VRow>
            <VCol class="mb-5" md="12">
                <expenses-notes :items="props.data" category="sites" @selected="selected" />
            </VCol>
        </VRow>
    </VCardText>
</VCard>
</template>

<style>
.justify-space-between {
    justify-content: space-between
}
.fw-900{
  font-weight: 900 !important;
}
</style>
