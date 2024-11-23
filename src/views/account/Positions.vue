<script setup>
import sites from "@/pages/components/listWithIndicator.vue"
import addSite from "@/views/account/Drawer.vue"
import { reactive } from "vue";
const isDrawerOpen = ref(false)

const emit = defineEmits([
  "onShowDrawer",
  "onSelected"
]);
const add = function() {
  emit("onShowDrawer");
}
const selected = function(item) {
  emit("onSelected", item);
}
const props = defineProps({
  sites: {
    type: Array,
    default:() => []
  },

  managers: {
    type: Array,
    default:() => []
  },

  countries: {
    type: Array,
    default:() => []
  },

  cities: {
    type: Array,
    default:() => []
  },

  status: {
    type: Array,
    default:() => []
  },

});
</script>
<template>
  <VCard>
    <template #title>
      <VRow>
      <VCol md="12">
        <div class="d-flex justify-space-between">
          <VChip
                      label>
                      <h3>Fonctions</h3>
                    </VChip>
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
        <sites 
        :items="props.sites" 
        category="sites"
        @selected="selected"></sites>
      </VCol>
    </VRow>
    </VCardText>
  </VCard>
</template>
