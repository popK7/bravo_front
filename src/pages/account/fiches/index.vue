<script setup>
import profileForm from "@/views/account/forms/AccountProfileForm.vue"
</script>

<template>
<VRow>
    <VCol cols="12">
        <VCard>
            <template #title>
                <h4>Information générale</h4>
            </template>
            <VCardText>
                <profile-form />
            </VCardText>
        </VCard>
    </VCol>
</VRow>
</template>
