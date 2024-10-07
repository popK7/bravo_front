<script setup>
import sites from "@/pages/components/listWithIndicator.vue"
import addSite from "@/views/account/siteDrawer.vue"
import { reactive } from "vue";
const isDrawerOpen = ref(false)

const emit = defineEmits([
    "onShowDrawer",
    "onSelected"
]);
const add = function () {
    emit("onShowDrawer");
}
const selected = function(item) {
  emit("onSelected", item);
}
const props = defineProps({
    sites: {
        type: Array,
        default: () => []
    },

    managers: {
        type: Array,
        default: () => []
    },

    countries: {
        type: Array,
        default: () => []
    },

    cities: {
        type: Array,
        default: () => []
    },

    status: {
        type: Array,
        default: () => []
    },

});
</script>
<template>
<VCard>
    <template #title>
        <VRow>
            <VCol class=" mt-5" md="12">
                <div class="d-flex justify-space-between">
                    <h4>Departements</h4>
                    <VBtn size="small" @click="add">
                        <VIcon end icon="tabler-plus" class="mr-2" /> Ajouter
                    </VBtn>
                </div>
            </VCol>
        </VRow>

    </template>
    <VCardText>
        <VRow>
            <VCol class=" mb-5" md="12">
                <sites :items="props.sites" category="sites" @selected="selected" v-if="true"></sites>
                <div class="progress_class" v-else>
                  <VProgressCircular :size="30" width="3" color="primary" indeterminate />
                </div>
            </VCol>
        </VRow>
    </VCardText>
</VCard>
</template>

<style scoped>
.progress_class{
  width: 50%;
  margin: auto 50%;
}
.justify-space-between {
    justify-content: space-between
}
</style>
