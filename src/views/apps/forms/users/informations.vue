<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'

const emit = defineEmits([
  'onSave'
])

const birth_date = ref('')
const personal_phone = ref('')
const personal_email = ref('')
const refForm = ref()
const password = ref('')
const confirmPassword = ref('')

const civil_state = ref()
const religion = ref()
const items = ['Celibataire', 'Marié(e)', 'Divorcé(e)', 'Veuf']
const religions = ['Chretien', 'Musulman', 'Boudiste'];

const save = function() {
  refForm.value ?.validate().then(({ valid }) => {
    if(valid) {
      emit('onSave');
    }
  })
};
</script>

<template>
<VForm ref="refForm" @submit.prevent="save">
    <VRow>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Date de naissance </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppDateTimePicker v-model="birth_date" placeholder="Date de naissance" :rules="[requiredValidator]"/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">État civil </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppAutocomplete v-model="civil_state" density="compact" :items="items" placeholder="État civil" :rules="[requiredValidator]"/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Téléphone personnel </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField id="mobileHorizontalIcons" v-model="personal_phone" type="number" prepend-inner-icon="tabler-device-mobile" placeholder="Téléphone personnel" persistent-placeholder :rules="[requiredValidator]"/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Email personnel </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField id="mobileHorizontalIcons" v-model="personal_email" type="email" prepend-inner-icon="tabler-mail" placeholder="Email personnel" persistent-placeholder :rules="[requiredValidator]"/>

                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Confession religieuse </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppAutocomplete v-model="religion" density="compact" :items="religions" placeholder="Confession religieuse" />

                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
        </VCol>

        <VCol cols="12" class="d-flex justify-content-end">
            <VBtn type="submit" @click="refForm?.validate()">
                Enregister
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>
<style scoped>
  .justify-content-end {
    justify-content: flex-end
  }
</style>
