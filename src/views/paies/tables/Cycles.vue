<script setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { paginationMeta } from '@/@fake-db/utils'
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'
import { avatarText } from '@core/utils/formatters'

import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
 
const teams = [
{avatar: avatar1, first_name: "Johe", last_name: "Doe"},
{avatar: avatar2, first_name: "Jennie", last_name: "Obrien"},
{avatar: avatar3, first_name: "Peter", last_name: "Harper"},
{avatar: avatar4, first_name: "Vivian", last_name: "Padilla"},
{avatar: avatar5, first_name: "Scott", last_name: "Wells"},
{avatar: avatar6, first_name: "Angel", last_name: "Bishop"}
]

const invoiceListStore = useInvoiceStore()
const searchQuery = ref('')
const dateRange = ref('')
const selectedStatus = ref()
const totalInvoices = ref(0)
const invoices = ref([])
const selectedRows = ref([])

const options = ref({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined, 
})

const isLoading = ref(false)

// 👉 headers
const headers = [
  {
    title: '#ID',
    key: 'id',
    align:'center'
  },
  {
    title: 'Début',
    key: 'total',
    align:'center'
  },
  {
    title: 'Fin',
    key: 'date',
    align:'center'
  },

  {
    title: 'Jour paie',
    key: 'trending',
    align:'center'
  },

  {
    title: 'Status',
    key: 'balance',
    align:'center'
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
    align:'center'
  },
]

// 👉 Fetch Invoices
const fetchInvoices = (query, currentStatus, firstDate, lastDate, option) => {
  isLoading.value = true
  invoiceListStore.fetchInvoices({
    q: query,
    status: currentStatus,
    startDate: firstDate,
    endDate: lastDate,
    options: option,
  }).then(response => {
    invoices.value = response.data.invoices
    totalInvoices.value = response.data.totalInvoices
    options.value.page = response.data.page
  }).catch(error => {
    console.log(error)
  })
  isLoading.value = false
}

// 👉 Computed action table
const computedMoreList = computed(() => {
  return paramId => [
    {
      title: 'Download',
      value: 'download',
      prependIcon: 'tabler-download',
    },
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'tabler-pencil',
      to: {
        name: 'apps-invoice-edit-id',
        params: { id: paramId },
      },
    },
    {
      title: 'Duplicate',
      value: 'duplicate',
      prependIcon: 'tabler-layers-intersect',
    },
  ]
})

// 👉 Delete Invoices
const deleteInvoice = id => {
  invoiceListStore.deleteInvoice(id).then(() => {
    fetchInvoices(searchQuery.value, selectedStatus.value, dateRange.value?.split('to')[0], dateRange.value?.split('to')[1], options.value)
  }).catch(error => {
    console.log(error)
  })
}

// 👉 watch for data table options like itemsPerPage,page,searchQuery,sortBy etc...
watchEffect(() => {
  const [start, end] = dateRange.value ? dateRange.value.split('to') : ''

  fetchInvoices(searchQuery.value, selectedStatus.value, start, end, options.value)
});
</script>

<template>
  <VCard
    v-if="invoices"
    id="invoice-list"
  >
    <VCardText class="d-flex align-center flex-wrap gap-3">

      <VSpacer />

      <div class="d-flex align-end flex-wrap gap-3">
        <!-- 👉 Search  -->
        <div class="invoice-list-search">
          <AppTextField
            v-model="searchQuery"
            placeholder="Recherche "
            density="compact"
            class="me-3"
          />
        </div>
        <div class="invoice-list-status">
          <AppSelect
            v-model="selectedStatus"
            density="compact"
            clearable
            clear-icon="tabler-x"
            :items="['Cloturé', 'Annullé', 'Pendding']"
            style="inline-size: 12rem;"
            placeholder="Choisir un status"
          />
        </div>
      </div>
    </VCardText>

    <VDivider />

    <!-- SECTION Datatable -->
    <VDataTableServer
      v-model="selectedRows"
      v-model:items-per-page="options.itemsPerPage"
      v-model:page="options.page"
      :loading="isLoading"
      show-select
      :items-length="totalInvoices"
      :headers="headers"
      :items="invoices"
      class="text-no-wrap"
      @update:options="options = $event"
    >
       <!-- Pay day -->
      <template #item.trending="{ item }">
        {{ item.raw.issuedDate }}
      </template>
      <!-- id -->
      <template #item.id="{ item }">
        <RouterLink :to="{ name: 'apps-invoice-preview-id', params: { id: item.value } }">
          #{{ item.raw.id }}
        </RouterLink>
      </template>

      <!-- employees -->
      <template #item.client="{ item }">
        <div class="v-avatar-group demo-avatar-group">
          <VAvatar :size="30" v-for="(team, i) in teams" :key="i">
            <VImg :src="team.avatar" />
            <VTooltip
              activator="parent"
              location="top"
            >
              {{ `${team.first_name} ${team.last_name}` }}

            </VTooltip>
          </VAvatar>
        </div>
      </template>

      <!-- Total -->
      <template #item.total="{ item }">
        {{ item.raw.issuedDate }}
      </template>

      <!-- Issued Date -->
      <template #item.date="{ item }">
        {{ item.raw.issuedDate }}
      </template>

      <!-- Balance -->
      <template #item.balance="{ item }">
        <VChip
          color="success"
          label
        >
        cloturé
        </VChip>
      </template>

      <!-- Actions -->
      <template #item.actions="{ item }">
        <IconBtn @click="deleteInvoice(item.raw.id)">
          <VIcon icon="tabler-trash" />
        </IconBtn>

        <IconBtn :to="{ name: 'paies-cycles-id', params: { id: item.raw.id } }">
          <VIcon icon="tabler-eye" />
        </IconBtn>

        <IconBtn @click="deleteInvoice(item.raw.id)">
          <VIcon icon="tabler-edit" />
        </IconBtn>
      </template>

      <template #bottom>
        <VDivider />
        <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
          <p class="text-sm text-disabled mb-0">
            {{ paginationMeta(options, totalInvoices) }}
          </p>

          <VPagination
            v-model="options.page"
            :length="Math.ceil(totalInvoices / options.itemsPerPage)"
            :total-visible="$vuetify.display.xs ? 1 : Math.ceil(totalInvoices / options.itemsPerPage)"
          >
            <template #prev="slotProps">
              <VBtn
                variant="tonal"
                color="default"
                v-bind="slotProps"
                :icon="false"
              >
                Previous
              </VBtn>
            </template>

            <template #next="slotProps">
              <VBtn
                variant="tonal"
                color="default"
                v-bind="slotProps"
                :icon="false"
              >
                Next
              </VBtn>
            </template>
          </VPagination>
        </div>
      </template>
    </VDataTableServer>
    <!-- !SECTION -->
    <VDivider />
  </VCard>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-actions {
    inline-size: 8rem;
  }

  .invoice-list-search {
    inline-size: 12rem;
  }
}
</style>
