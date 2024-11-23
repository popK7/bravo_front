<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import salaryForm from './components/AddSalaryForm.vue';
import additionalRemunerationForm from './components/AdditionalRemunerationForm.vue';

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
    formData: {
      type: Object,
      default: () => {}
    }
    
})

const drawerOpen = ref(props.isDrawerOpen)
const finished = ref(false);

const components = {
  'salary': salaryForm,
  'additional': additionalRemunerationForm,
  'update_salary': salaryForm,
  'update_additional':additionalRemunerationForm,
}

const titles = {
  'salary': 'Nouveau salaire',
  'additional': "Rémunération",
  'update_salary': 'Modifier salaire',
  'update_additional': 'Modifier Rémunération',
}

const currentComponent = ref(components[props.tab]);

const emit = defineEmits([
    'update:isDrawerOpen',
    'userData',
    'onSave'
])

// 👉 drawer close
const closeNavigationDrawer = () => {
    emit('update:isDrawerOpen', false)
    nextTick(() => {
        // refForm.value ?.reset()
        // refForm.value ?.resetValidation()
    })
}
const save = function (data) {
    emit('onSave', data)
}

const handleDrawerModelValueUpdate = val => {
    emit('update:isDrawerOpen', val)
};

</script>

<template>
<VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="drawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection :title="titles[props.tab]" @cancel="closeNavigationDrawer" />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
        <VCard flat>
            <VCardText>
                  <component 
                  :is="currentComponent"
                  :form="props.formData"
                  :key="props.formData"
                  @save="save" />
            </VCardText>
        </VCard>
    </PerfectScrollbar>
</VNavigationDrawer>
</template>
