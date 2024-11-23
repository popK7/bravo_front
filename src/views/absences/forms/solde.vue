<script setup>
import {
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

const emit = defineEmits([
    'save',
])

const props = defineProps({
    form: {
        type: Object,
        default: () => {}
    },

});

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

const isFormValid = ref(false)
const refForm = ref()
const solde= ref();
const category = ref(props.form ?.category ?? null)
const from = ref(props.form ?.from ?? null)
const to = ref(props.form ?.to ?? null)
const status = ref(null)
const description = ref(props.form ?.description ?? null);
const handleSubmit = ref(false)

// submit form
const onSubmit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
            handleSubmit.value = true;
            let data = {
                'name': name.value,
                'description': description.value,
            }
            setTimeout(() => {
                emit('save', data)
                handleSubmit.value = false;
                nextTick(() => {
                    refForm.value ?.reset()
                    refForm.value ?.resetValidation()
                })

            }, 4000);
        }

    })
};
// add rate slice
const addSliceRate = function () {
    slices.value += 1;
};
const absences = [
  {title: 'Congé annuel payé', value: 1},
  {title: 'Congé Maladie', value: 2},
  {title: 'Télétravail', value: 3},
  {title: 'Absence non justifiée', value: 4},
];
</script>
<template>
<!-- 👉 Form -->
<VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
    <VRow>
        <!-- 👉 Employee(s) -->
        <VCol cols="12">
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
        <!-- 👉 absence -->
        <VCol cols="12">
            <AppAutocomplete
                  label="Type absence"
                  :items="absences"
                  v-model="category"
                  placeholder="Choisr une absence"
                  class="mb-3"
                />
                <span class="text-small">Pour ajouter un nouveau type cliquez <a href="http://">Ici</a></span>
              
        </VCol>
        <VCol cols="12">
          <AppTextField
            v-model="solde"
            label="Solde"
            suffix="jours"
            type="number"
            placeholder="Solde"
          />
        </VCol>
        <!-- 👉 Description -->
        <VCol cols="12">
            <AppTextarea label="Description" placeholder="Déscription de la note" v-model="description" />
        </VCol>

        <!-- 👉 Submit and Cancel -->
        <VCol cols="12">
            <VBtn type="submit">
                Enregistrer
                <VProgressCircular :size="20" width="3" color="" indeterminate class="ml-2" v-if="handleSubmit" />
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>

<style>
.justify-content-end {
    justify-content: end;
}
</style>
