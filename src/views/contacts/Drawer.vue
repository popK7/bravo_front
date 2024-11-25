<script setup>

import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import contactForm from "./Forms/add.vue"; 

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  tab: {
    type: String,
    default: 'add_contact',
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
  add_contact: "Ajouter un contact",
  update_contact: "Modifier le contact"

}
const components = {
  add_contact: contactForm,
  update_contact: contactForm

}

const title = ref(titles[props.tab]);
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
