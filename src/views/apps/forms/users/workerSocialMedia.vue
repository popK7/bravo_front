<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'

const emit = defineEmits([
  'onSave'
]);
const facebook = ref('')
const linkedin = ref('')
const twitter = ref('')
const password = ref('')
const confirmPassword = ref('');

const save = function() {
  emit('onSave')
}
</script>

<template>
<VForm ref="refForm" @submit.prevent="save">
    <VRow>
        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Linkedin </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField id="linkedin" v-model="linkedin" prepend-inner-icon="tabler-brand-linkedin" placeholder="Linkedin" persistent-placeholder />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="facebook">Facebook </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField id="facebook" v-model="facebook" prepend-inner-icon="tabler-brand-facebook" placeholder="Facebook" persistent-placeholder />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="twitter">Twitter </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField id="twitter" v-model="twitter" prepend-inner-icon="tabler-brand-twitter" placeholder="Twitter" persistent-placeholder />

                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" class="d-flex justify-content-end">
            <VBtn type="submit" @click="refForm?.validate()">
                Enregister
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>

<style lang="scss" scoped>
.justify-content-end {
    justify-content: flex-end;
}
</style>
