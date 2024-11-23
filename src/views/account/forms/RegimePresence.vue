<script setup>
import {
    requiredValidator,
} from '@validators'

const isFormValid = ref(false)
const refForm = ref()
const name = ref()
const status = ref();
const handleSubmit = ref(false)

const emit = defineEmits([
    'save',
])

const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    status: {
        type: Array,
        default: () => []
    },
    isFinished: {
        type: Boolean,
        default: false
    },

});

// submit form
const onSubmit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
            handleSubmit.value = true;
            let data = {
                'name': name.value,
                'status': status.value,
            }

            emit('save', data)
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

        <!-- 👉 Status -->
        <VCol cols="12">
            <AppSelect v-model="status" label="Status" :items="props.status" placeholder="Select Status" />
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
