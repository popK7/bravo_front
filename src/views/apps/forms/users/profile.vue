<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'

const first_name = ref('')
const last_name = ref('')
const sexe = ref()
const email = ref('')
const mobile_pro_1 = ref('')
const mobile_pro_2 = ref('')
const note = ref('')
const refForm = ref()
const password = ref('')
const confirmPassword = ref('')
const items = ['Neutre', 'Homme', 'Femme'];

const emit = defineEmits(['onSaveProfile']);
// save form
const save = function () {
    refForm.value ?.validate().then(({ valid }) => {
        if (valid) {
            let profile_data = {
                'first_name': first_name.value,
                'last_name': last_name.value,
                'sexe': sexe.value,
                'email': email.value,
                'mobile_pro_1': mobile_pro_1.value,
                'mobile_pro_2': mobile_pro_2.value,
                'note': note.value,
            }
            emit('onSaveProfile', profile_data)
        }
    })
};
</script>

<template>
<VForm ref="refForm" @submit.prevent="() => {}">
    <VRow>
        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="firstName">Prénom</label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField v-model="first_name" placeholder="Prénom" persistent-placeholder :rules="[requiredValidator]" prepend-inner-icon="tabler-user" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Nom de famille">Nom de famille</label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField v-model="last_name" placeholder="Nom de famille" persistent-placeholder :rules="[requiredValidator]" prepend-inner-icon="tabler-user" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Sexe </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppSelect :items="items" v-model="sexe" placeholder="Choisir un sexe" :rules="[requiredValidator]"/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Email </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField id="emailHorizontalIcons" v-model="email" prepend-inner-icon="tabler-mail" placeholder="Email" persistent-placeholder :rules="[requiredValidator, emailValidator]" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="phonePro1">Téléphone pros 1 </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField id="phonePro1" v-model="mobile_pro_1" type="number" prepend-inner-icon="tabler-device-mobile" placeholder="Téléphone pro 1" persistent-placeholder :rules="[requiredValidator]" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="phonePro2">Téléphone pros 2 </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextField id="phonePro2" v-model="mobile_pro_2" type="number" prepend-inner-icon="tabler-device-mobile" placeholder="Téléphone pro 2" persistent-placeholder />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Apropos de moi </label>
                </VCol>
                <VCol cols="12" md="10">
                    <AppTextarea v-model="note" counter placeholder="Une note" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Avatar </label>
                </VCol>
                <VCol cols="12" md="10">
                    <VFileInput :rules="rules" label="Avatar" accept="image/png, image/jpeg, image/bmp" placeholder="Avatar" prepend-icon="tabler-camera" />
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" class="d-flex justify-content-end">
            <VBtn type="submit" @click="save">
                Enregistrer
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>

<style scoped>
.justify-content-end {
    justify-content: flex-end;
}
</style>
