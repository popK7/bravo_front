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

const files = ref([])

const isFormValid = ref(false)
const refForm = ref()
const category = ref(props.form ?.product ?? null)
const message = ref(props.form ?.note ?? null)
const start_at = ref(props.form ?.start_at ?? null)
const end_at = ref(props.form ?.end_at ?? null)


const description = ref(props.form ?.description ?? '');
const handleSubmit = ref(false)

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
                emit('save', data);
            }, 4000);
        }

    })
};
</script>
<template>
<!-- 👉 Form -->
<VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
    <VRow>
        <!-- 👉 Contract -->
        <VCol cols="12">
            <AppTextField v-model="name" :rules="[requiredValidator]" label="Nom" placeholder="Intitulé du contract" />
        </VCol>

         <!-- 👉 Date certificat -->
         <VCol cols="12">
            <AppDateTimePicker
              v-model="end_at"
              label="Date cerificat"
              placeholder="Date fin contrat"
            />
        </VCol>

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

        <!-- 👉 File -->
        <VCol cols="12">
            <VFileInput v-model="files" multiple placeholder="Upload your documents" label="Fichiers" prepend-icon="tabler-file">
                <template #selection="{ fileNames }">
                    <template v-for="fileName in fileNames" :key="fileName">
                        <VChip label size="small" color="primary" class="me-2">
                            {{ fileName }}
                        </VChip>
                    </template>
                </template>
            </VFileInput>
        </VCol>

        <!-- 👉 Description -->
        <VCol cols="12">
            <AppTextarea v-model="note" label="Message" placeholder="Laisser un message" />
        </VCol>

        <!-- 👉 Submit and Cancel -->
        <VCol cols="12">
            <VBtn type="submit" class="me-3">
                Enregistrer
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
