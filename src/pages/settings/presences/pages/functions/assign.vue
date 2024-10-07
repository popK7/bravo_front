<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const teams = ref([
    'Sandra Adams',
    'Britta Holt',
])

const people = [{
        name: 'Sandra Adams',
        group: 'Group 1',
        avatar: avatar1,
    },
    {
        name: 'Ali Connors',
        group: 'Group 1',
        avatar: avatar2,
    },
    {
        name: 'Trevor Hansen',
        group: 'Group 1',
        avatar: avatar3,
    },
    {
        name: 'Tucker Smith',
        group: 'Group 1',
        avatar: avatar4,
    },
    {
        name: 'Britta Holt',
        group: 'Group 2',
        avatar: avatar5,
    },
    {
        name: 'Jane Smith ',
        group: 'Group 2',
        avatar: avatar6,
    },
    {
        name: 'John Smith',
        group: 'Group 2',
        avatar: avatar7,
    },
    {
        name: 'Sandra Williams',
        group: 'Group 2',
        avatar: avatar8,
    },
];
</script>

<template>
<VCard>
    <VCardText>
        <VForm @submit.prevent="() => {}">
            <VRow>
                <VCol cols="12">
                    <VRow no-gutters>
                        <!-- 👉 First Name -->
                        <VCol cols="12" md="12" class="d-flex align-items-center">
                            <AppAutocomplete v-model="teams" chips closable-chips multiple :items="people" item-title="name" item-value="name" label="Employés" placeholder="Employés">
                                <template #chip="{ props, item }">
                                    <VChip v-bind="props" :prepend-avatar="item.raw.avatar" :text="item.raw.name" />
                                </template>

                                <template #item="{ props, item }">
                                    <VListItem v-bind="props" :prepend-avatar="item?.raw?.avatar" :title="item?.raw?.name" :subtitle="item?.raw?.group" />
                                </template>
                            </AppAutocomplete>
                        </VCol>
                    </VRow>
                </VCol>

                <!-- 👉 submit and reset button -->
                <VCol  cols="12" md="12" class="d-flex gap-4">
                    <VBtn type="submit">
                        Envoyer
                    </VBtn>
                    <VBtn color="secondary" variant="tonal" type="reset">
                        Reinitialiser
                    </VBtn>
                </VCol>
            </VRow>
        </VForm>
    </VCardText>
</VCard>
</template>
