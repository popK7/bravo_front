<script setup>
import {
    requiredValidator,
} from '@validators'

const emit = defineEmits([
    'save',
])

const props = defineProps({
    form: {
        type: Object,
        default: () => {}
    },

});

const isFormValid = ref(false)
const refForm = ref()
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
      <VCol cols="12" class="d-flex justify-space-between">
        <VSwitch
      v-model="status"
      label="Annuler"
    />
      </VCol>
        <!-- 👉 absence -->
        <VCol cols="12">
            <AppAutocomplete
                  label="Absence"
                  :items="absences"
                  v-model="category"
                  placeholder="Choisr une absence"
                  class="mb-3"
                />
                <span class="text-small">Pour ajouter un nouveau type cliquez <a href="http://">Ici</a></span>
              
        </VCol>
        <!-- from to -->
        <VCol cols="12">
           <VRow>
              <VCol md="12">
                <AppDateTimePicker
                    v-model="From"
                    label="From"
                    placeholder="Date début"
                    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
                  />
              </VCol>
              <VCol md="12">
                <AppDateTimePicker
                    v-model="to"
                    label="To"
                    placeholder="Date fin"
                    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
                  />
              </VCol>
           </VRow>
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
