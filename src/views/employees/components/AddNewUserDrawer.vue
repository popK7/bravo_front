<script>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import {
    emailValidator,
    requiredValidator,
} from '@validators'

const props = defineProps({
    isDrawerOpen: {
        type: Boolean,
        required: true,
    },
})

const emit = defineEmits([
    'update:isDrawerOpen',
    'userData',
])

const isFormValid = ref(false)
const refForm = ref()
const fullName = ref('')
const email = ref('')
const company = ref('')
const country = ref('')
const contact = ref('')
const role = ref()
const plan = ref()
const status = ref()

// 👉 drawer close
const closeNavigationDrawer = () => {
    emit('update:isDrawerOpen', false)
    nextTick(() => {
        refForm.value ?.reset()
        refForm.value ?.resetValidation()
    })
}

const onSubmit = () => {
    refForm.value ?.validate().then(({ valid }) => {
        if (valid) {
            emit('userData', {
                id: 0,
                fullName: fullName.value,
                company: company.value,
                role: role.value,
                country: country.value,
                contact: contact.value,
                email: email.value,
                currentPlan: plan.value,
                status: status.value,
                avatar: '',
                billing: 'Auto Debit',
            })
            emit('update:isDrawerOpen', false)
            nextTick(() => {
                refForm.value ?.reset()
                refForm.value ?.resetValidation()
            })
        }
    })
}

const handleDrawerModelValueUpdate = val => {
    emit('update:isDrawerOpen', val)
};
</script>

<template>
<VNavigationDrawer temporary :width="400" location="end" class="scrollable-content" :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">
    <!-- 👉 Title -->
    <AppDrawerHeaderSection title="Nouvel Employé" @cancel="closeNavigationDrawer" />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
        <VCard flat>
            <VCardText>
                <!-- 👉 Form -->
                <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                    <VRow>
                        <!-- 👉 Full name -->
                        <VCol cols="12">
                            <AppTextField v-model="fullName" :rules="[requiredValidator]" label="Nom" placeholder="Nom" />
                        </VCol>

                        <!-- 👉 Email -->
                        <VCol cols="12">
                            <AppTextField v-model="email" :rules="[requiredValidator, emailValidator]" label="Prénom" placeholder="Prénom" />
                        </VCol>

                        <!-- 👉 company -->
                        <VCol cols="12">
                            <AppTextField v-model="company" :rules="[requiredValidator]" label="E-mail" placeholder="E-mail" />
                        </VCol>

                        <!-- 👉 Country -->
                        <VCol cols="12">
                            <AppTextField v-model="country" :rules="[requiredValidator]" type="number" label="Téléphone" placeholder="Téléphone" />
                        </VCol>

                        <!-- 👉 Langages -->
                        <VCol cols="12">
                            <AppSelect v-model="role" label="Langue" :rules="[requiredValidator]" placeholder="Selectionnez une langue" :items="['Admin', 'Author', 'Editor', 'Maintainer', 'Subscriber']" />
                            <span class="d-block mt-2">Sélectionnez la langue de l'interface</span>
                        </VCol>
                        <!-- 👉 Departemnt -->
                        <VCol cols="12">
                            <AppSelect v-model="role" label="Département" :rules="[requiredValidator]" placeholder="Selectionnez une équipe" :items="['Admin', 'Author', 'Editor', 'Maintainer', 'Subscriber']" />
                        </VCol>

                        <!-- 👉 Plan -->
                        <VCol cols="12">
                            <AppSelect v-model="plan" label="Contrat" placeholder="Selectionnez un contrat" :rules="[requiredValidator]" :items="['Basic', 'Company', 'Enterprise', 'Team']" />
                        </VCol>

                        <!-- 👉 Status -->
                        <VCol cols="12">
                            <AppSelect v-model="status" label="Status" placeholder="Choisir un status" :rules="[requiredValidator]" :items="[{ title: 'Active', value: 'active' }, { title: 'Inactive', value: 'inactive' }, { title: 'Pending', value: 'pending' }]" />
                        </VCol>

                        <!-- 👉 Submit and Cancel -->
                        <VCol cols="12">
                            <VBtn type="Enregistrer" class="me-3">
                                Submit
                            </VBtn>
                            <VBtn type="reset" variant="tonal" color="secondary" @click="closeNavigationDrawer">
                                Cancel
                            </VBtn>
                        </VCol>
                    </VRow>
                </VForm>
            </VCardText>
        </VCard>
    </PerfectScrollbar>
</VNavigationDrawer>
</template>
