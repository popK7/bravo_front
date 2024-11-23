<script setup>
import {
    emailValidator,
    requiredValidator,
} from '@validators'

const props = defineProps({
    form: {
        type: Object,
        default: () => {}
    }
})

const amount = ref(props.form ?.salary ?? null) 
const devise = ref(props.form ?.currency.value ?? null)
const frequency = ref(props.form ?.frequency.value ?? null)
const from = ref(props.form ?.start_at ?? null);
const to = ref(props.form ?.end_at ?? null);
const description = ref(props.form?.description ?? null);

const refForm = ref()
const handleSubmit = ref(false);

const emit = defineEmits(['save']);

const submit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
            handleSubmit.value = true;
            let response = {
                status: '200',
                message: "L'infomration a bien été modifiée",
                data: {
                    'salary': amount.value,
                    'currency': devise.value,
                    'frequency': frequency.value,
                    'from': from.value,
                    'to': to.value
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
const items = [
    { title: 'Euros', value: 1 },
    { title: 'Dollars', value: 2 },
    { title: 'Dirhams', value: 3 }
];
const frequancies = [
    { title: 'Horaire', value: 1 },
    { title: 'Hebdomadaire', value: 2 },
    { title: 'Mensuel', value: 3 },
    { title: 'Annuel', value: 4 }
];

console.log(props.form);
</script>

<template>
<VForm ref="refForm" @submit.prevent="() => {}">
    <VRow>
        <VCol cols="12" md="12">
            <AppTextField v-model="amount" :rules="[requiredValidator]" label="Montant" placeholder="Montant" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <VAutocomplete variant="outlined" label="Devise" :items="items" v-model="devise" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <VAutocomplete variant="outlined" label="Fréquence" :items="frequancies" v-model="frequency" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <AppDateTimePicker v-model="from" placeholder="Date d'entrée en vigueur" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <AppDateTimePicker v-model="to" placeholder="Date de fin" />
        </VCol>

        <VCol cols="12" md="12">
            <AppTextarea v-model="description" placeholder="Laisser une note ..." auto-grow />
        </VCol>

        <VCol cols="12">
            <VBtn type="submit" @click="submit">
                Enregistrer
                <VProgressCircular :size="20" width="3" color="" indeterminate class="ml-2" v-show="handleSubmit" />
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>
