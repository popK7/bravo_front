<script setup>
import {
    requiredValidator,
} from '@validators'

const isFormValid = ref(false)
const refForm = ref()
const name = ref()
const address = ref()
const country = ref()
const city = ref()
const postal_code = ref()
const manager = ref()
const description = ref();
const handleSubmit = ref(false)

const emit = defineEmits([
    'save',
])
// submit form
const onSubmit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
          handleSubmit.value = true;
            let data = {
                'name': name.value,
                'address': address.value,
                'country': country.value,
                'city': city.value,
                'postal_code': postal_code.value,
                'manager': manager.value,
                'status': status.value,
                'resource': 'position'
            }

            emit('save', data)
        }

    })
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
                Envoyer
                <VProgressCircular :size="20" width="3" color="" indeterminate class="ml-2" v-if="handleSubmit"/>
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>
