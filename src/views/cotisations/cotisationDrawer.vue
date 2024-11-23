<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import employersCotisation from "./forms/employers.vue"
import employeesCotisation from "./forms/employees.vue"

import { useRoute, useRouter } from 'vue-router'; 

const route = useRouter();
const router = useRoute();

const props = defineProps({
    isDrawerOpen: {
        type: Boolean,
        required: false,
    },
    tab: {
        type: String,
        default: null
    }
    
})

const titles = {
  employees: "Cotisation Salariale",
  employers: "Cotisation Patronale"
}

const components = {
  employees: employeesCotisation,
  employers: employersCotisation
}

const title = ref(titles[props.tab]);
const drawerOpen = props.isDrawerOpen
const finished = ref(false);
const currentComponent = ref(components[props.tab]);

const emit = defineEmits([
    'update:isDrawerOpen',
    'userData',
    'onsave'
])

// watch route change
const switchComponent = function (tab) {
  title.value = titles[props.tab]
  currentComponent.value = components[props.tab]
}

watch(() => props.tab, (current, last) => {
    switchComponent(props.tab); 
});

// 👉 drawer close
const closeNavigationDrawer = () => {
    emit('update:isDrawerOpen', false)
    nextTick(() => {
        refForm.value ?.reset()
        refForm.value ?.resetValidation()
    })
}
const saveCotisation = function (data) {
    emit('onSave', data)
}

const handleDrawerModelValueUpdate = val => {
    emit('update:isDrawerOpen', val)
};

</script>

<template>
<VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection :title="title" @cancel="closeNavigationDrawer" />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
        <VCard flat>
            <VCardText>
                  <component 
                  :is="currentComponent"
                  @save="saveCotisation" />
            </VCardText>
        </VCard>
    </PerfectScrollbar>
</VNavigationDrawer>
</template>
