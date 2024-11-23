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

const value = ref(props.form?.value ?? null)
const type = ref(props.form?.type.value ?? null)
const frequency = ref(props.form?.frequency.value ?? null)
const from = ref(props.form?.start_at ?? null);
const to = ref(props.form?.end_at ?? null);
const currency = ref(props.form?.currency.value ?? null);
const description = ref(props.form?.description ?? null);
const handleSubmit = ref(false);

const refForm = ref()

const emit = defineEmits(['save']);

const remunerationTypes = [
    {title: 'Bonus', value: 1},
    {title: 'Commission vente', value: 2},
    {title: 'Complement salaire', value: 3},
    {title: 'Heures supplementaires', value: 4},
    {title: 'Indemnité pour voiture', value: 5},
    {title: 'Indemnité pour voiture', value: 6},
    {title: 'Indemnité pour voiture', value: 7}
];

const currencies = [
{title: 'Dollars', icon: '$', value: 1},
{title: 'Euros', icon: 'Eu', value: 2},
{title: 'Dirhams', icon: 'dhs', value: 3}
];

const frequancies = [
{title: 'Horaire', icon: '$', value: 1},
{title: 'Hebdomadaire', icon: '$', value: 2},
{title: 'Mensuel', icon: '$', value: 3},
{title: 'Annuel', icon: '$', value: 4}
];

const submit = function () {
    refForm.value ?.validate().then(({ valid: isValid }) => {
        if (isValid) {
            handleSubmit.value = true;
            let response = {
              status: '200',
              message: "La remunération a bien été ajoutée",
              data: {
                'value': value.value,
                'devise': devise.value,
                'type': type.value,
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

</script>

<template>
<VForm ref="refForm" @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <VAutocomplete variant="outlined" label="Type" :items="remunerationTypes" v-model="type" class="mb-2"/>
            <span class="text-sm">Ajoutez et gérez les types de rémunération <a href="">Ici</a> </span>
        </VCol>

        <VCol cols="12" md="12">
            <AppTextField v-model="value" :rules="[requiredValidator]" placeholder="Montant" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <VAutocomplete v-model="currency" variant="outlined" label="Devise" :items="currencies" />
        </VCol>

        <VCol cols="12" md="12">
            <!-- 👉 outlined variant -->
            <VAutocomplete v-model="frequency" variant="outlined" label="Fréquence" :items="frequancies" />
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
                <VProgressCircular :size="20" width="3" color="" indeterminate class="ml-2" v-show="handleSubmit"/>
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>
