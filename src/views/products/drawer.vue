<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import productSettingForm from "./forms/setting.vue"
import demandForm from "./forms/demand.vue"
import productForm from "./forms/product.vue"


const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },

  tab: {
    type: String,
    default: 'setting'
  }
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
])

const isFormValid = ref(false)
const refForm = ref()
const fullName = ref('')
const email = ref('')
const company = ref('')
const country = ref('')
const contact = ref('')
const role = ref()
const plan = ref()
const status = ref()

const titles = {
  setting: 'Ajouter un produit',
  add_demand: 'Deposer une demande',
  assign_product: 'Assigner un produit',
  edit_assign_product: "Editer l'assignement",
  add_product:  "Ajouter un produit",

}
const components = {
  setting: productSettingForm,
  add_demand: demandForm,
  assign_product: demandForm,
  add_product: productForm,
  edit_assign_product: demandForm

}

const currentComponent = components[props.tab]
const title = titles[props.tab]

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('userData', {
        id: 0,
        fullName: fullName.value,
        company: company.value,
        role: role.value,
        country: country.value,
        contact: contact.value,
        email: email.value,
        currentPlan: plan.value,
        status: status.value,
        avatar: '',
        billing: 'Auto Debit',
      })
      emit('update:isDrawerOpen', false)
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
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
          <component :is="currentComponent"/>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
