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
    }
})

const amount = ref(props.form ?.salary ?? null) 
const devise = ref(props.form ?.currency.value ?? null)
const frequency = ref(props.form ?.frequency.value ?? null)
const from = ref(props.form ?.start_at ?? null);
const to = ref(props.form ?.end_at ?? null);
const description = ref(props.form?.description ?? null);

const refForm = ref()
const handleSubmit = ref(false);

const isAssign = ref(false)
const emit = defineEmits(['save']);

const submit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
            handleSubmit.value = true;
            let response = {
                status: '200',
                message: "L'infomration a bien été modifiée",
                data: {
                    'salary': amount.value,
                    'currency': devise.value,
                    'frequency': frequency.value,
                    'from': from.value,
                    'to': to.value
                },
            }
            setTimeout(() => {
                emit('save', response)
                handleSubmit.value = false;
                nextTick(() => {
                    // refForm.value ?.reset()
                    // refForm.value ?.resetValidation()
                })

            }, 4000);
        }
    })
};
const items = [
    { title: 'Euros', value: 1 },
    { title: 'Dollars', value: 2 },
    { title: 'Dirhams', value: 3 }
];
const frequancies = [
    { title: 'Horaire', value: 1 },
    { title: 'Hebdomadaire', value: 2 },
    { title: 'Mensuel', value: 3 },
    { title: 'Annuel', value: 4 }
];

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
];

</script>

<template>
<VForm ref="refForm" @submit.prevent="() => {}">
    <VRow>
        <!-- 👉 start cycle -->
        <VCol cols="12" md="12">
            <AppDateTimePicker v-model="from" placeholder="Début cycle" label="Début cycle"/>
        </VCol>
        <!-- 👉 end cycle -->
        <VCol cols="12" md="12">
            <AppDateTimePicker v-model="to" placeholder="Fin cycle" label="Fin cycle"/>
        </VCol>
        <!-- 👉 frequency -->
        <VCol cols="12" md="12">
          <AppDateTimePicker v-model="day_of_pay" placeholder="Jour de paie" label="Jour de paie"/>
        </VCol>

         <!-- 👉 assign? -->
         <VCol cols="12" md="12">
          <VSwitch
            v-model="isAssign"
            label="Assigner?"
          />
        </VCol>

        <!-- 👉 Employee(s) -->
        <VCol cols="12" v-if="isAssign">
          <AppAutocomplete
            v-model="friends"
            chips
            closable-chips
            multiple
            :items="people"
            item-title="name"
            item-value="name"
            placeholder="Choisir employé(s)"
            label="Employé(s)"
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

        <VCol cols="12" md="12">
            <AppTextarea v-model="description" placeholder="Laisser une note ..." label="Description" auto-grow />
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
