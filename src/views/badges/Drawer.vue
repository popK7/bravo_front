<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import demandForm from "./forms/demand.vue"
import badgeForm from "./forms/badge.vue"

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  tab: {
    type: String,
    default: "add_demand"
  }
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
])

const titles = {
  add_demand: "Deposer une demande",
  add_badge: "Ajouter un badge",

}

const components = {
  add_demand: demandForm,
  add_badge: badgeForm,

}

const title = ref(titles[props.tab]);
const currentComponent = ref(components[props.tab]);


// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
};

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
          <component :is="currentComponent" @save="closeNavigationDrawer"/>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
