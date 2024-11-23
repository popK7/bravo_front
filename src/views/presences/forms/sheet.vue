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

const presence_start_at = ref(null)
const presence_end_at = ref(null)
const break_start_at = ref(null)
const break_end_at = ref(null)

const isFormValid = ref(false)
const refForm = ref()
const name = ref(props.form ?.name ?? '')
const description = ref(props.form ?.description ?? '');
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

const friends = ref([
  'Sandra Adams',
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
        <!-- 👉 Start at -->
        <VCol cols="12">
            <AppDateTimePicker
              v-model="presence_start_at"
              label="Début journée"
              placeholder="Début journée"
              :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
            />
        </VCol>

         <!-- 👉 end at -->
         <VCol cols="12">
            <AppDateTimePicker
              v-model="presence_end_at"
              label="Fin journée"
              placeholder="Fin journée"
              :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
            />
        </VCol>

        <!-- 👉 break start at -->
        <VCol cols="12">
            <AppDateTimePicker
              v-model="break_start_at"
              label="Début pause"
              placeholder="Début journée"
              :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
            />
        </VCol>

         <!-- 👉 break end at -->
         <VCol cols="12">
            <AppDateTimePicker
              v-model="break_end_at"
              label="Fin pause"
              placeholder="Fin journée"
              :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
            />
        </VCol>

        <!-- 👉 Description -->
        <VCol cols="12">
            <AppTextarea label="Description" placeholder="Déscription" v-model="description" />
        </VCol>

        <!-- 👉 Submit and Cancel -->
        <VCol cols="12">
            <VBtn type="submit" class="me-3">
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
