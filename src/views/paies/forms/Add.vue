<script setup>
import {
    emailValidator,
    requiredValidator,
} from '@validators'

import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const props = defineProps({
    form: {
        type: Object,
        default: () => {}
    },
    reset:{
      type: Boolean,
      default: false
    }
})

const amount = ref(props.form ?.amount ?? null) 
const currency = ref(props.form ?.currency ?? null)
const frequency = ref(props.form ?.frequency ?? null)
const from = ref(props.form ?.from ?? null);
const to = ref(props.form ?.to ?? null);
const category = ref(props.form ?.category ?? null);
const employees_selected = ref(props.form ?.employees ?? [])
const description = ref(props.form?.description ?? null);

const refForm = ref()
const handleSubmit = ref(false);
const isDisabled = ref(props.form?.amount ? true: false)

const emit = defineEmits(['save']);

watch(props.reset, () => {
  nextTick(() => {
      refForm.value ?.reset()
      refForm.value ?.resetValidation()
  })
})


const submit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
            handleSubmit.value = true;
            let response = {
                status: true,
                code: 200,
                message: "L'infomration a bien été modifiée",
                data: {
                    'salary': amount.value,
                    'currency': currency.value,
                    'frequency': frequency.value,
                    'from': from.value,
                    'to': to.value
                },
            }
            setTimeout(() => {
                emit('save', response)
                handleSubmit.value = false;
            }, 4000);
        }
    })
};
const currencies = [
    { name: 'Euros', code: 1 },
    { name: 'Dollars', code: 2 },
    { name: 'Dirhams', code: 3 }
];
const frequancies = [
    { name: 'Horaire', code: 1 },
    { name: 'Hebdomadaire', code: 2 },
    { name: 'Mensuel', code: 3 },
    { name: 'Annuel', code: 4 }
];


const categories = ref([
{title:'Salaire', value: 1},
{title:'Avantage en nature', value: 2}
])


const employees = [
  {
    code: 1,
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    code: 2,
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    code: 3,
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    code: 4,
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    code: 5,
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    code: 6,
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    code: 7,
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    code: 8,
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
];

</script>

<template>
<VForm ref="refForm" @submit.prevent="() => {}">
    <VRow>
        <!-- 👉 Employee(s) -->
        <VCol cols="12">
          <AppAutocomplete
            v-model="employees_selected"
            chips
            closable-chips
            multiple
            :items="employees"
            item-title="name"
            item-value="code"
            placeholder="Choisir employé(s)"
            label="Employé(s)"
            :disabled="isDisabled"
          >
            <template #chip="{ props, item }">
              <VChip
                v-bind="props"
                :prepend-avatar="item.raw.avatar"
                :text="item.raw.name"
              />
            </template>

            <template #item="{ props, item }">
              <VListItem
                v-bind="props"
                :prepend-avatar="item?.raw?.avatar"
                :title="item?.raw?.name"
                :subtitle="item?.raw?.group"
              />
            </template>
          </AppAutocomplete>
        </VCol>
        <!-- 👉 categorie -->
        <VCol cols="12">
            <AppSelect v-model="category" label="Catégorie" :rules="[requiredValidator]" :items="categories" placeholder="Selectionner une catégorie" />
        </VCol>
         <!-- 👉 Amount -->
        <VCol cols="12" md="12">
            <AppTextField type="number" v-model="amount" :rules="[requiredValidator]" label="Montant" placeholder="Montant" />
        </VCol>
         <!-- 👉 Employee(s) -->
        <VCol cols="12" md="12">
            <VAutocomplete  
                item-title="name"
                item-value="code" 
                variant="outlined" 
                label="Devise" 
                :items="currencies" v-model="currency" />
            </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <VAutocomplete 
                item-title="name"
                item-value="code" 
                variant="outlined" 
                label="Fréquence" 
                :items="frequancies" v-model="frequency" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <AppDateTimePicker v-model="from" placeholder="Date d'entrée en vigueur" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <AppDateTimePicker v-model="to" placeholder="Date de fin" />
        </VCol>

        <VCol cols="12" md="12">
            <AppTextarea v-model="description" placeholder="Laisser une note ..." auto-grow />
        </VCol>

        <VCol cols="12">
            <VBtn type="submit" @click="submit">
                Enregistrer
                <VProgressCircular :size="20" width="3" color="" indeterminate class="ml-2" v-show="handleSubmit" />
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>
