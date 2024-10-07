<script setup>
import {
    requiredValidator,
} from '@validators'

const isFormValid = ref(false)
const refForm = ref()
const name = ref()
const address = ref()
const country = ref()
const city = ref()
const postal_code = ref()
const manager = ref()
const status = ref();
const handleSubmit = ref(false)

const emit = defineEmits([
    'save',
])

const props = defineProps({
    managers: {
        type: Array,
        default: () => []
    },
    cities: {
        type: Array,
        default: () => []
    },
    countries: {
        type: Array,
        default: () => []
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
                'address': address.value,
                'country': country.value,
                'city': city.value,
                'postal_code': postal_code.value,
                'manager': manager.value,
                'status': status.value,
                'resource': 'departement'
            }

            emit('save', data)
        }

    })
};

</script>
<template>
<!-- 👉 Form -->
<VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
    <VRow>
              <!-- 👉 Manager -->
              <VCol cols="12">
            <AppSelect v-model="manager" :items="props.managers" item-title="name" item-value="name" placeholder="Responsable" label="Responsable" clearable clear-icon="tabler-x">
                <template #selection="{ item }">
                    <VChip>
                        <VAvatar start :image="item.raw.avatar" />
                        <span>{{ item.title }}</span>
                    </VChip>
                </template>
            </AppSelect>
        </VCol>
        <!-- 👉 name -->
        <VCol cols="12">
            <AppTextField v-model="name" :rules="[requiredValidator]" label="Nom" placeholder="Nom du site" />
        </VCol>

        <!-- 👉 Status -->
        <VCol cols="12">
            <AppSelect v-model="status" label="Select Status" :items="props.status" placeholder="Select Status" />
        </VCol>

        <!-- 👉 Submit and Cancel -->
        <VCol cols="12">
            <VBtn type="submit" class="me-3">
                Envoyer
                <VProgressCircular :size="20" width="3" color="" indeterminate class="ml-2" v-if="!props.isFinished"/>
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>
