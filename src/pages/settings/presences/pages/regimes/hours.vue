<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

import TableList from '@/pages/components/bravo/table.vue'


const teams = ref([
    'Sandra Adams',
    'Britta Holt',
])

const search = ref('');

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
const items = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimache'];
</script>

<template>
<div>
    <VCard>
        <template #title>
            <h3>Horaire de travail</h3>
        </template>
        <VCardText>
            <VForm @submit.prevent="() => {}">
                <VRow>
                    <VCol cols="12">
                        <VRow>
                            <VCol md="4" lg="4">
                                <AppAutocomplete label="Jour travaillé" :items="items" placeholder="Jour de la semaine" chips multiple/>
                            </VCol>
                            <VCol md="4" lg="4">
                                <AppDateTimePicker v-model="from" label="Début journée" :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }" placeholder="Heure début journée" />
                                <AppDateTimePicker v-model="from" label="Fin journée" :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }" placeholder="Heure fin journée" />
                            </VCol>
                            <!-- 👉 First Name -->
                            <VCol md="4" lg="4">
                                <AppDateTimePicker v-model="from" label="Début pause" :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }" placeholder="Heure début pause" />
                                <AppDateTimePicker v-model="from" label="Fin pause" :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }" placeholder="Heure fin pause" />
                            </VCol>
                        </VRow>
                    </VCol>

                    <!-- 👉 submit and reset button -->
                    <VCol cols="12" md="12" class="d-flex gap-4 justify-content-end">
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

    <VCard class="mt-5">
      <template #title>
        <h3 class="mb-2">Emplois du temps</h3>
    </template>
    <VCardText>
      <VRow>
      <VCol md="12">
        <div style="inline-size: 272px;">
          <AppTextField
            v-model="search"
            placeholder="Recherche"
          />
        </div>
      </VCol> 
      <VCol lg="12">
        <table-list :research="search" :key="search"/>
      </VCol>
    </VRow>
    </VCardText>
</VCard>
</div>
</template>

<style>
.justify-content-end {
    justify-content: end;
}
</style>
