<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import {
    emailValidator,
    requiredValidator,
} from '@validators'
import siteForm from "./forms/SiteForm.vue"
import departmentForm from "./forms/DepartmentForm.vue"
import positionForm from "./forms/PositionForm.vue"

const currentComponentName = ref();

const props = defineProps({
    isDrawerOpen: {
        type: Boolean,
        required: false,
    },
    managers: {
        type: Array,
        default: () => []
    },
    cities: {
        type: Array,
        default: () => []
    },
    countries: {
        type: Array,
        default: () => []
    },
    status: {
        type: Array,
        default: () => []
    },
    isFinished: {
        type: Boolean,
        default: false
    },
    tab: {
        type: String,
        default: 'sites'
    }
})
const currentComponent = ref(siteForm);
const drawerOpen = props.isDrawerOpen

const emit = defineEmits([
    'update:isDrawerOpen',
    'userData',
    'onsave'
])

// switch
const switchComponent = function () {
    switch (props.tab) {
        case 'sites':
            currentComponent.value = siteForm
            break;
        case 'departments':
            currentComponent.value = departmentForm
            break;
        case 'positions':
            currentComponent.value = positionForm
            break;

        default:
            break;
    }
}

watch(() => props.tab, () => {
    switchComponent();
});

// 👉 drawer close
const closeNavigationDrawer = () => {
    emit('update:isDrawerOpen', false)
    nextTick(() => {
        refForm.value ?.reset()
        refForm.value ?.resetValidation()
    })
}
const saveSite = function (data) {
    emit('onSave', data)
}

const handleDrawerModelValueUpdate = val => {
    emit('update:isDrawerOpen', val)
};
</script>

<template>
<VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection :title="props.tab" @cancel="closeNavigationDrawer" />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
        <VCard flat>
            <VCardText>
                <component :is="currentComponent" :managers="props.managers" :cities="props.cities" :countries="props.countries" :status="props.status" :isFinished="props.isFinished" @save="saveSite"></component>
            </VCardText>
        </VCard>
    </PerfectScrollbar>
</VNavigationDrawer>
</template>
