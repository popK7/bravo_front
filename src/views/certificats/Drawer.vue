<script setup>

import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import certificatForm from "./Forms/Demand.vue"; 

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  tab: {
    type: String,
    default: 'add_certificat',
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
])

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}

const titles = {
  add_certificat: "Ajouter un certificat",
  update_certificat: "Modifier le certificat"
}
const title = titles[props.tab]
const components = {
  add_certificat: certificatForm,
  update_certificat: certificatForm,


}
const currentComponent = ref(components[props.tab]);
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      :title="title"
      @cancel="closeNavigationDrawer"
    />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <component :is="currentComponent" />
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
