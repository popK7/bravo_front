<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import advantageForm from "./forms/regime.vue"
import sheetForm from "./forms/sheet.vue"
import supHourForm from "./forms/supHour.vue"
import regimes from "./forms/regime.vue"


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
  regimes: "Regimes présences",
  "sheet": "Feuille de temps",
  "edit_sheet": "Modifier la feuille",
  "sup_hours": "Heures supplémentaires",
  "edit_sup_hours": "Modifier heure supplémentaire"
}

const components = {
  "sheet": sheetForm,
  "edit_sheet": sheetForm,
  "sup_hours": supHourForm,
  "edit_sup_hours":supHourForm,
  regimes: regimes
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


// 👉 drawer close
const closeNavigationDrawer = () => {
    emit('update:isDrawerOpen', false)
    nextTick(() => {
        refForm.value ?.reset()
        refForm.value ?.resetValidation()
    })
}
const saveAvantage = function (data) {
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
                  @save="saveAvantage" />
            </VCardText>
        </VCard>
    </PerfectScrollbar>
</VNavigationDrawer>
</template>
