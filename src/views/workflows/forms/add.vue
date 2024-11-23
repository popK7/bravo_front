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

const departments = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]

const categories = [
  "Admin",
  "Employé",
  "Chef d'équipe",
]

const isFormValid = ref(false)
const refForm = ref()
const name = ref(props.form ?.name ?? '')
const status = ref(props.form ?.status ?? '')
const message = ref(props.form ?.message ?? '');
const departements = ref(props.form ?.departments ?? '');

const handleSubmit = ref(false)

// submit form
const onSubmit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
            handleSubmit.value = true;
            let data = {
                'name': name.value,
                'message': message.value,
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
</script>
<template>
<!-- 👉 Form -->
<VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
    <VRow>
        <!-- 👉 name -->
        <VCol cols="12">
            <AppTextField v-model="name" :rules="[requiredValidator]" label="Nom" placeholder="Nom du site" />
        </VCol>

        <!-- 👉 status -->
        <VCol cols="12">
          <AppAutocomplete
            label="Catégorie"
            :items="categories"
            placeholder="Choisir une fonction"
          />
        </VCol>
        <!-- 👉 message -->
        <VCol cols="12">
            <AppTextarea label="Message" placeholder="Message ..." v-model="message" />
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
