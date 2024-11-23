<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'

const bic_swift = ref('')
const num_account = ref('');
const handleSubmit = ref(false)
const refForm = ref(false)

const emit = defineEmits(['save']);

const submit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
            handleSubmit.value = true;
            let response = {
                status: '200',
                message: "Compte bancaire a bien été modifiée",
                data: {
                    'bic_swift': bic_swift.value,
                    'num_account': num_account.value,
                },
            }
            setTimeout(() => {
                emit('save', response)
                handleSubmit.value = false;
                nextTick(() => {
                    // refForm.value ?.reset()
                    // refForm.value ?.resetValidation()
                })

            }, 4000);
        }
    })
};
</script>

<template>
<div>
    <VForm ref="refForm" @submit.prevent="() => {}">
        <VRow>
            <VCol cols="12" md="12">
                <AppTextField v-model="num_account" placeholder="Numéro de compte" persistent-placeholder :rules="[requiredValidator]" label="Numéro de compte" />
            </VCol>

            <VCol cols="12" md="12">
                <AppTextField v-model="bic_swift" placeholder="BIC/SWIFT" persistent-placeholder :rules="[requiredValidator]" label="BIC/SWIFT" />
            </VCol>

            <VCol cols="12" class="d-flex justify-content-end">
                <VBtn type="submit" @click.prevent="submit">
                    Enregistrer
                    <VProgressCircular :size="20" width="3" color="" indeterminate class="ml-2" v-show="handleSubmit"/>
                </VBtn>
            </VCol>
        </VRow>
    </VForm>
</div>
</template>
