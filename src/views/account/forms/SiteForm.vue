<script setup>
import {
    requiredValidator,
} from '@validators'


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
    name: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    
});


const isFormValid = ref(false)
const refForm = ref()
const name = ref(props.name)
const address = ref(props.address)
const country = ref(props.country)
const city = ref(props.city)
const postal_code = ref(props.postal_code)
const manager = ref(props.manager)
const status = ref(props.status);
const handleSubmit = ref(false)

const emit = defineEmits([
    'save',
])

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
                'resource': 'site'
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

        <!-- 👉 address -->
        <VCol cols="12">
            <AppTextField v-model="address" :rules="[requiredValidator]" label="Adresse" placeholder="Site adresse" />
        </VCol>

        <!-- 👉 city -->
        <VCol cols="12">
            <AppSelect :items="props.cities" label="Ville" placeholder="Ville" v-model="city" :rules="[requiredValidator]" />
        </VCol>

        <!-- 👉 Country -->
        <VCol cols="12">
            <AppSelect :items="props.countries" label="Pays" placeholder="Pays" v-model="country" :rules="[requiredValidator]" />
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
