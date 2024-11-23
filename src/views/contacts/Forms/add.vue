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
const categories = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
const files = ref([])

const isFormValid = ref(false)
const refForm = ref()
const phone1 = ref(props.form ?.phone1 ?? null)
const phone2 = ref(props.form ?.phone2 ?? null)
const address = ref(props.form ?.end_at ?? null)
const category = ref(props.form ?.category ?? null);

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
            <AppTextField
              v-model="name"
              label="Nom"
              placeholder="Nom"
              :rules="[requiredValidator]"
            />
        </VCol>

         <!-- 👉 Email -->
         <VCol cols="12">
            <AppTextField
              v-model="name"
              label="Email"
              placeholder="Adresse mail"
              :rules="[requiredValidator]"
            />
        </VCol>

         <!-- 👉 Phone1 -->
         <VCol cols="12">
            <AppTextField
              v-model="phone"
              label="Téléphone personnel"
              placeholder="Téléphone personnel"
              :rules="[requiredValidator]"
            />
        </VCol>

        <!-- 👉 Phone2 -->
        <VCol cols="12">
            <AppTextField
              v-model="phone2"
              label="Téléphone profesionnel"
              placeholder="Téléphone profesionnel"
              :rules="[requiredValidator]"
            />
        </VCol>
        <!-- contacts categories -->
        <VCol cols="12">
          <AppSelect
              v-model="category"
              :items="categories"
              :menu-props="{ transition: 'scroll-y-transition' }"
              label="Categorie"
              placeholder="Choiisir une catégorie"
            />
        </VCol>

        <!-- 👉 Description -->
        <VCol cols="12">
            <AppTextarea v-model="note" label="Adresse" placeholder="Adresse ..." />
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
