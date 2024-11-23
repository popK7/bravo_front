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
const name = ref(props.form ?.name ?? '')
const subject = ref(props.form ?.subject ?? '')
const from = ref(props.form ?.from ?? '')
const to = ref(props.form ?.to ?? '')
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
</script>
<template>
<!-- 👉 Form -->
<VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
    <VRow>
        <!-- 👉 title -->
        <VCol cols="12">
            <AppTextField v-model="name" :rules="[requiredValidator]" label="Titre" placeholder="Un titre pour la note" />
        </VCol>

         <!-- 👉 subject -->
         <VCol cols="12">
            <AppTextField v-model="subject" :rules="[requiredValidator]" label="Sujet" placeholder="Sujet de la note" />
        </VCol>
        <!-- from to -->
        <VCol cols="12">
           <VRow>
              <VCol md="12" lg="6">
                <AppDateTimePicker
                    v-model="From"
                    label="From"
                    placeholder="Date début"
                    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
                    :rules="[requiredValidator]"
                  />
              </VCol>
              <VCol md="12" lg="6">
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
