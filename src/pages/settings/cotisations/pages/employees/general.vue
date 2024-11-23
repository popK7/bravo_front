<script setup>
import employeeForm from "@/views/cotisations/forms/employees.vue"
import { reactive } from "vue";

const route = useRoute()
const router = useRouter()

const form = reactive({
    id: route.query.id,
    name: route.query.name,
    description: route.query.description,
    plafond: 100,
    limit: 1,
    rate: 4,
})

const isSnackbarTopVisible = ref(false)
const snackbarText = ref(null)

const handleSave = function (data) {

    snackbarText.value = "La cotisation a bien été enregistrée";
    isSnackbarTopVisible.value = true;
};
</script>
<template>
<div>
    <VRow>
        <VCol cols="12" md="12">
            <VCard>
                <template #title>
                    <h3>Général</h3>
                </template>
                <VCardText>
                    <employee-form :form="form" @save="handleSave"></employee-form>
                </VCardText>
            </VCard>
        </VCol>
    </VRow>
    <!-- alert notification -->
    <VSnackbar v-model="isSnackbarTopVisible" location="top">
        {{snackbarText}}
    </VSnackbar>
</div>
</template>
