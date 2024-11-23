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
const name = ref(props.form?.name)
const rate = ref(props.form?.rate)
const limit = ref(props.form?.limit)
const description = ref(props.form?.description);
const handleSubmit = ref(false)


// submit form
const onSubmit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
            handleSubmit.value = true;
            let data = {
                'name': name.value,
                'rate': rate.value,
                'limit': limit.value,
                'description': description.value,
                'cotisation_type': 1 // Employer cotisation
            }

            setTimeout(() => {
              emit('save', data)
              handleSubmit.value = false;
              nextTick(() => {
                refForm.value?.reset()
                refForm.value?.resetValidation()
              })
              
            }, 4000);
        }

    })
};
// 
watch(props.isFinished, () => {
  console.log('success');
});
</script>
<template>
<!-- 👉 Form -->
<VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
    <VRow>
        <!-- 👉 name -->
        <VCol cols="12">
            <AppTextField v-model="name" :rules="[requiredValidator]" label="Nom" placeholder="Nom du site" />
        </VCol>

        <!-- 👉 Rate -->
        <VCol cols="12">
        <AppTextField
                label="Taux"
                type="number"
                placeholder="Taux applicable"
                v-model="rate"
              />
        </VCol>

        <!-- 👉 plafond -->
        <VCol cols="12">
        <AppTextField
                label="Plafond"
                type="number"
                placeholder="Limite"
                v-model="limit"
              />
        </VCol>


        <!-- 👉 Description -->
        <VCol cols="12">
          <AppTextarea
          label="Description"
          placeholder="Déscription"
          v-model="description"
        />
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
