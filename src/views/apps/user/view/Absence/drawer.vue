<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import demandForm from "./forms/demandForm.vue"
import soldeForm from "./forms/soldeForm.vue"


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
    },
    form: {
        type: Object,
        default: () => []
    }

})

const titles = {
    update_demand: "Modifier sa demande",
    create_demand: "Deposer une demance",
    update_solde: "Modifier solde"
}

const components = {
    update_demand: demandForm,
    create_demand: demandForm,
    update_solde: soldeForm,
}

const title = ref(titles[props.tab] ?? 'ddd');
const drawerOpen = props.isDrawerOpen
const currentComponent = ref(components[props.tab]);

console.log(props.tab);

const emit = defineEmits([
    'update:isDrawerOpen',
    'userData',
    'onsave'
])


// 👉 drawer close
const closeNavigationDrawer = () => {
    emit('update:isDrawerOpen', false)
    nextTick(() => {
        // refForm.value ?.reset()
        // refForm.value ?.resetValidation()
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
                <component :is="currentComponent" :form="props.form" @save="saveAvantage" />
            </VCardText>
        </VCard>
    </PerfectScrollbar>
</VNavigationDrawer>
</template>
