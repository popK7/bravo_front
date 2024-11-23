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
const category =  ref(props.form ?.product ?? null)
const name = ref(props.form ?.name ?? '')
const from = ref(props.form ?.from ?? '')
const to = ref(props.form ?.to ?? '')
const note = ref(props.form ?.note ?? '')

const description = ref(props.form ?.description ?? '');
const handleSubmit = ref(false)

const badges = ['Admin', 'Author', 'Editor', 'Maintainer', 'Subscriber'];

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
                emit('save');
            }, 4000);
        }

    })
};
</script>
<template>
<!-- 👉 Form -->
<!-- 👉 Form -->
<VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
    <VRow>
        <!-- 👉 Product Category -->
        <VCol cols="12">
          <AppSelect v-model="category" label="Badge" :rules="[requiredValidator]" :items="badges" placeholder="Selectionner un badge" />
        </VCol>

        <!-- 👉 Description -->
        <VCol cols="12">
          <AppTextarea
            v-model="note"
            label="Note"
            placeholder="Laisser un message"
          />
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
