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
const name = ref(props.form ?.name ?? '')
const description = ref(props.form ?.description ?? '');
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

            }, 4000);
        }

    })
};
// add rate slice
const addSliceRate = function () {
    slices.value += 1;
};
</script>
<template>
<!-- 👉 Form -->
<!-- 👉 Form -->
<VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
    <VRow>
        <!-- 👉 Full name -->
        <VCol cols="12">
            <AppTextField v-model="fullName" :rules="[requiredValidator]" label="Full Name" placeholder="Full Name" />
        </VCol>

        <!-- 👉 Email -->
        <VCol cols="12">
            <AppTextField v-model="email" :rules="[requiredValidator, emailValidator]" label="Email" placeholder="Email" />
        </VCol>

        <!-- 👉 company -->
        <VCol cols="12">
            <AppTextField v-model="company" :rules="[requiredValidator]" label="Company" placeholder="Company" />
        </VCol>

        <!-- 👉 Country -->
        <VCol cols="12">
            <AppTextField v-model="country" :rules="[requiredValidator]" label="Country" placeholder="Country" />
        </VCol>

        <!-- 👉 Contact -->
        <VCol cols="12">
            <AppTextField v-model="contact" type="number" :rules="[requiredValidator]" label="Contact" placeholder="Contact" />
        </VCol>

        <!-- 👉 Role -->
        <VCol cols="12">
            <AppSelect v-model="role" label="Select Role" :rules="[requiredValidator]" :items="['Admin', 'Author', 'Editor', 'Maintainer', 'Subscriber']" placeholder="Select Role" />
        </VCol>

        <!-- 👉 Plan -->
        <VCol cols="12">
            <AppSelect v-model="plan" label="Select Plan" :rules="[requiredValidator]" :items="['Basic', 'Company', 'Enterprise', 'Team']" placeholder="Select Plan" />
        </VCol>

        <!-- 👉 Status -->
        <VCol cols="12">
            <AppSelect v-model="status" label="Select Status" :rules="[requiredValidator]" :items="[{ title: 'Active', value: 'active' }, { title: 'Inactive', value: 'inactive' }, { title: 'Pending', value: 'pending' }]" placeholder="Select Status" />
        </VCol>

        <!-- 👉 Submit and Cancel -->
        <VCol cols="12">
            <VBtn type="submit" class="me-3">
                Submit
            </VBtn>
            <VBtn type="reset" variant="tonal" color="secondary" @click="closeNavigationDrawer">
                Cancel
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
