<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import noteSettingForm from "./forms/notes.vue"
import demandForm from "./forms/demand.vue"
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
        default: 'setting'
    }
    
})

const titles = {
  setting: "Ajouter une note de frais",
  expence_demand: "Déposer une note",
  edit_expense_demand: "Modifier la demande"
}

const components = {
  setting: noteSettingForm,
  expence_demand: demandForm,
  edit_expense_demand: demandForm

}

const title = ref(titles[props.tab]);
const currentComponent = ref(components[props.tab]);
const drawerOpen = props.isDrawerOpen


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
const saveExpense = function (data) {
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
                  @save="saveExpense" />
            </VCardText>
        </VCard>
    </PerfectScrollbar>
</VNavigationDrawer>
</template>
