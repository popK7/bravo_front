<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'


const refForm = ref()

const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
];
</script>

<template>
<VForm ref="refForm" @submit.prevent="() => {}">

    <VRow>
        <VCol cols="12" md="2" class="d-flex align-items-center">
            <label class="v-label text-body-2 text-high-emphasis" for="firstName">
              Langue par défaut
            </label>
        </VCol>
        <VCol cols="12" md="10">
            <AppSelect
              :items="items"
              placeholder="Langues"
            />
            <span class="d-block mt-2">Sélectionnez la langue que les nouveaux employés utiliseront par défaut dans bravoRH.</span>
        </VCol>
    </VRow>

    <VRow>
        <VCol cols="12" md="2" class="d-flex align-items-center">
            <label class="v-label text-body-2 text-high-emphasis" for="firstName">
              Devise par défaut
            </label>
        </VCol>
        <VCol cols="12" md="10">
            <AppSelect
              :items="items"
              placeholder="Devise"
            />
            <span class="d-block mt-2">Sélectionnez la devise utilisée par défaut pour les données financières telles que les salaires et les dépenses.</span>
        </VCol>
    </VRow>

    <VRow>
        <VCol cols="12" md="12" class="d-flex" style="justify-content: flex-end">
            <VBtn type="submit">
                Submit
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>
