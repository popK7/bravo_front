<script setup>
import list from "@/pages/components/listWithIndicator.vue"
import { reactive } from "vue";
const isDrawerOpen = ref(false)

const emit = defineEmits([
    "onShowDrawer",
    "onSelected"
]);
const add = function () {
    emit("onShowDrawer");
}
const selected = function (item) {
    emit("onSelected", item);
}
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    entity: {
      type: String,
      default: 'Sites'
    },
    icon: {
      type: String,
      default: 'tabler-clock'
    }

});
</script>
<template>
<VCard>
    <template #title>
        <VRow>
            <VCol md="12">
                <div class="d-flex justify-space-between">
                    <VChip label>
                        <VIcon :icon="props.icon" color="primary"/>
                        <h3 class="ml-2">{{ props.entity }}</h3>
                    </VChip>
                    <VBtn size="small" @click="add">
                        Ajouter
                        <VIcon icon="tabler-square-check" />
                    </VBtn>
                </div>
            </VCol>
        </VRow>

    </template>
    <VCardText>
        <VRow>
            <VCol class="mb-5" md="12">
                <list :items="props.data" category="sites" @selected="selected"></list>
            </VCol>
        </VRow>
    </VCardText>
</VCard>
</template>
