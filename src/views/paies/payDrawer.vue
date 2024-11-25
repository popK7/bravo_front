<script setup>

import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import settingForm from "./forms/Setting.vue"
import cycleForm from "./forms/Cycle.vue"
import employeeAdvantageForm from "./forms/Add.vue"
import notification from "@/pages/components/bravo/alert.vue"
import { useRoute, useRouter } from 'vue-router'; 

const route = useRouter();
const router = useRoute();
const isConfirmDialogVisible = ref(false);
const isAlertVisible = ref(false);
const alertMessage = ref('');
const alertColor = ref('error');


const props = defineProps({
    isDrawerOpen: {
        type: Boolean,
        required: false,
    },
    form:{
      type: Object,
      default: () => {},
    },
    tab: {
        type: String,
        default: 'add_salary'
    }
    
})

const emit = defineEmits([
    'update:isDrawerOpen',
    'userData',
])

const titles = {
  advantage: 'Assigner un avantage',
  edit_remuneration: 'Modifier l\'assignation',
  setting: "Ajouter un type d'avantage",
  cycle: "Ajouter un cycle",
  edit_cycle: "Modifier le cycle"

}

const components = {
  advantage: employeeAdvantageForm,
  setting: settingForm,
  cycle: cycleForm,
  edit_remuneration: employeeAdvantageForm,
  edit_cycle: cycleForm

}

const title = ref(titles[props.tab]);
const currentComponent = ref(components[props.tab]);

const drawerOpen = props.isDrawerOpen
const resetForm = ref(false);


// 👉 drawer close
const closeNavigationDrawer = () => {
    resetForm.value = true;
    handleDrawerModelValueUpdate(false)
}
const save = function (data) {
    if(data.status) {
      alertColor.value = "success";
    }
    alertMessage.value = data.message
    handleDrawerModelValueUpdate(false)
    isAlertVisible.value =true;
}
const handleDrawerModelValueUpdate = val => {
    resetForm.value = true;
    emit('update:isDrawerOpen', val)
  
};
</script>

<template>
  <div>
    <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
      <!-- 👉 Title -->
      <AppDrawerHeaderSection :title="title" @cancel="closeNavigationDrawer" />

      <PerfectScrollbar :options="{ wheelPropagation: false }">
          <VCard flat>
              <VCardText>
                    <component 
                    :is="currentComponent"
                    :form= "props.form"
                    :reset="resetForm"
                    @save="save" />
              </VCardText>
          </VCard>
      </PerfectScrollbar>
  </VNavigationDrawer>
  <notification :is-visible="isAlertVisible" :color="alertColor" :message="alertMessage"/>
  </div>
</template>
