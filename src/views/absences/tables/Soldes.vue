<script setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { paginationMeta } from '@/@fake-db/utils'
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'
import { avatarText } from '@core/utils/formatters'
import employees from '@/pages/components/bravo/usersMultiSelect.vue'

const emit = defineEmits([
  'onAction'
]);

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
  },
  {
    title: 'Employé',
    key: 'client',
  },
  {
    title: 'Catégorie',
    key: 'category',
  },
  {
    title: 'Total',
    key: 'total',
    align:'center'
  },
  {
    title: 'Pris',
    key: 'taken',
    align:'center'
  },
  {
    title: 'Restants',
    key: 'remaining',
    align:'center'
  },
  {
    title: 'Actions',
    key: 'actions',
    align:'center',
    sortable: false,
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

const resolveInvoiceStatusVariantAndIcon = status => {
  if (status === 'Partial Payment')
    return {
      variant: 'warning',
      icon: 'tabler-circle-half-2',
    }
  if (status === 'Paid')
    return {
      variant: 'success',
      icon: 'tabler-circle-check',
    }
  if (status === 'Downloaded')
    return {
      variant: 'info',
      icon: 'tabler-download',
    }
  if (status === 'Draft')
    return {
      variant: 'secondary',
      icon: 'tabler-device-floppy',
    }
  if (status === 'Sent')
    return {
      variant: 'primary',
      icon: 'tabler-mail',
    }
  if (status === 'Past Due')
    return {
      variant: 'error',
      icon: 'tabler-alert-circle',
    }
  
  return {
    variant: 'secondary',
    icon: 'tabler-x',
  }
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
      <div class="mr-3">
        <h4>Filtres</h4>
      </div>
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
        <div class="employees-list">
          <employees />
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

      <!-- id -->
      <template #item.id="{ item }">
        <RouterLink :to="{ name: 'apps-invoice-preview-id', params: { id: item.value } }">
          #{{ item.raw.id }}
        </RouterLink>
      </template>

      <!-- category -->
      <template #item.category="{ item }">
        <span>Congé annuel payé</span>
      </template>


      <!-- client -->
      <template #item.client="{ item }">
        <div class="d-flex align-center">
          <VAvatar
            size="38"
            :color="!item.raw.avatar.length ? resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).variant : undefined"
            :variant="!item.raw.avatar.length ? 'tonal' : undefined"
            class="me-3"
          >
            <VImg
              v-if="item.raw.avatar.length"
              :src="item.raw.avatar"
            />
            <span v-else>{{ avatarText(item.raw.client.name) }}</span>
          </VAvatar>
          <div class="d-flex flex-column">
            <h6 class="text-body-1 font-weight-medium mb-0">
              {{ item.raw.client.name }}
            </h6>
            <span class="text-sm">{{ item.raw.client.companyEmail }}</span>
          </div>
        </div>
      </template>

      <!-- Total -->
      <template #item.total="{ item }">
        <VBadge 
        color="primary"
          content="18"
          rounded="sm"
          class="text-center"
          >
        </VBadge>
      </template>

      <!-- absence taked -->
      <template #item.taken="{ item }">
        <div
          class="d-flex align-center gap-3"
          style="min-inline-size: 150px;"
        >
          <div class="flex-grow-1">
            <VProgressLinear
              model-value="80"
              color="success"
              height="8"
              rounded
              rounded-bar
            />
          </div>
          <span>12.5</span>
        </div>
      </template>

      <!-- absence left -->
      <template #item.remaining="{ item }">
        <div
          class="d-flex align-center gap-3"
          style="min-inline-size: 150px;"
        >
          <div class="flex-grow-1">
            <VProgressLinear
              model-value="20"
              color="primary"
              height="8"
              rounded
              rounded-bar
            />
          </div>
          <span>5.5</span>
        </div>
      </template>

      <!-- Actions -->
      <template #item.actions="{ item }">

        <IconBtn @click="emit('onAction', item.raw, 'edit')">
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
