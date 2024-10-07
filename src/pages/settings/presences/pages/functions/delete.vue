<script setup>

</script>

<template>
<VCard>
    <VCardText>
        <VForm @submit.prevent="() => {}">
            <VRow>
                <VCol cols="12">
                    <VRow no-gutters>
                        <!-- 👉 First Name -->

                        <VCol cols="12" md="12">
                            <h3 class="mb-2">Suppresion</h3>
                            <VAlert variant="outlined" color="primary" class="mb-5">
                                Attention la suppression du site n'est pas reversible, veuillez tout dabord detacher les employeés liés à cet site
                            </VAlert>
                            <VBtn variant="outlined" color="error">
                                Supprimer le site
                            </VBtn>
                        </VCol>
                    </VRow>
                </VCol>
            </VRow>
        </VForm>
    </VCardText>
</VCard>
</template>
