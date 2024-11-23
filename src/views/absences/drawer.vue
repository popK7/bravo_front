<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import regimeForm from "./forms/regimes.vue"
import typeForm from "./forms/types.vue"
import soldeForm from "./forms/solde.vue"
import demandForm from "./forms/demands.vue"

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
  types: "Ajouter un type",
  regimes: "Ajouter un regime",
  update_solde: "Modifier Solde",
  demand: "Déposer une demande",
  update_demand: "Modifier la demande"
}

const components = {
  types: typeForm,
  regimes: regimeForm,
  update_solde: soldeForm,
  demand: demandForm,
  update_demand: demandForm
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
    console.log('success');
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
