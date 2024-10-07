<script setup>
import managers from "@/pages/components/forms/MultiSelect.vue"
</script>
<template>
<VCard>
    <template #title>
    </template>
    <VCardText>
        <VRow>
            <VCol class="offset-md-4">
                <h2 class="mb-3">Gestion du compte</h2>
            </VCol>
            <VCol cols="12" md="12" class="mb-5">
                <VRow>
                    <VCol cols="4" md="4">
                        <p class="text-right">Propriétaire du compte</p>
                    </VCol>
                    <VCol cols="8" md="8">
                        <p>Le compte bravoRH ne peut avoir qu'un seul propriétaire. Seul le titulaire du compte peut changer le plan d'abonnement. Le titulaire du compte peut transférer la propriété à tout utilisateur.</p>
                        <VForm @submit.prevent="() => {}">
                            <VRow>
                                <VCol cols="12" md="12">
                                    <managers></managers>
                                    <span>Sélectionnez un utilisateur pour transférer la propriété du compte bravoRH</span>
                                </VCol>
                                <VCol cols="12" md="12">
                                    <VBtn variant="outlined">
                                        transférer la proprieté
                                    </VBtn>
                                </VCol>
                            </VRow>

                        </VForm>
                    </VCol>
                </VRow>
            </VCol>
            <VDivider />
            <VCol class="offset-md-4">
                <h2 class="mb-3">Politique de confidentialité</h2>
            </VCol>
            <VCol cols="12" md="12" class="mb-5">
                <VRow>
                    <VCol cols="4" md="4">
                        <p class="text-right">RGPD</p>
                    </VCol>
                    <VCol cols="8" md="8">
                        <p>Nous prenons très au sérieux la protection des données personnelles et les traitons de manière confidentielle, conformément au règlement général européen sur la protection des données.</p>
                        <VBtn variant="outlined">
                            Lire la politique de confidentialité
                        </VBtn>
                    </VCol>
                </VRow>
            </VCol>
            <VDivider />
            <VCol class="offset-md-4">
                <h2 class="mb-3">Suppression du compte</h2>
            </VCol>
            <VCol cols="12" md="12" class="mb-5">
                <VRow>
                    <VCol cols="4" md="4">
                        <p class="text-right">Suppression</p>
                    </VCol>
                    <VCol cols="8" md="8">
                        <p>La suppression du compte supprime définitivement toutes les données du compte. La suppression du compte est définitive.</p>
                        <VBtn variant="outlined" color="error">
                            Supprimer le compte
                        </VBtn>
                    </VCol>
                </VRow>
            </VCol>
        </VRow>
    </VCardText>
</VCard>
</template>
