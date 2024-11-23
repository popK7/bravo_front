<script setup>
import list from "@/pages/components/bravo/expansion.vue"
import noticeForm from "@/views/notices/departments/forms/Notice.vue" 
import MultiSelect from "@/views/notices/departments/components/MultiSelect.vue"


</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <h4>Les notes circulaires</h4>
        </template>
    </VCard>
    <VCard>
        <VCardText>
            <VRow>
                <VCol md="4" class="my-10">
                  <h4>Ajouter une circulaire</h4>
                  <br>
                  <notice-form />
                </VCol>

                <VCol md="8" class="my-10">
                    <div class="d-flex justify-space-between">
                        <h4>Les notes circulaires</h4>
                        <multi-select />
                    </div>
                    <br>
                    <list />
                </VCol>
            </VRow>
        </VCardText>

    </VCard>

</div>
</template>
