<script setup>
import {
  confirmedValidator,
  emailValidator,
  passwordValidator,
  requiredValidator,
} from '@validators'

const bic_swift = ref('')
const num_account = ref('');
</script>

<template>
  <div>
    <h3 class="mb-5">Compte bancaire</h3>
    <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="12"
      >
        <AppTextField
          v-model="num_account"
          placeholder="Numéro de compte"
          persistent-placeholder
          :rules="[requiredValidator]"
          label="Numéro de compte"
        />
      </VCol>

      <VCol
        cols="12"
        md="12"
      >
        <AppTextField
          v-model="bic_swift"
          placeholder="BIC/SWIFT"
          persistent-placeholder
          :rules="[requiredValidator]"
          label="BIC/SWIFT"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
  </div>

</template>
