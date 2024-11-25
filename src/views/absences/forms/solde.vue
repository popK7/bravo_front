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

const major_solde= ref();
const minor_solde= ref();

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
        <!-- 👉 soldes major-->
        <VCol cols="12">
            <AppTextField v-model="major_solde" type="number" label="Solde par ans" placeholder="Solde pour adulte" />
        </VCol>
         <!-- 👉 soldes minor-->
         <VCol cols="12">
            <AppTextField v-model="minor_solde" type="number" label="Solde Mineur" placeholder="Solde pour mineur" />
        </VCol>
         <!-- 👉 accumulation -->
         <VCol cols="12">
          <AppTextField
            v-model="cumul"
            label="Cumule"
            suffix="ans"
            type="number"
            placeholder="2"
          />
          <div class="text-danger mt-1">
            <small>Période de cumule des absences(N-1, N, N+1)</small>
          </div>
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
