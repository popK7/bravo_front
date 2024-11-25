<script setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { paginationMeta } from '@/@fake-db/utils'
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'
import { avatarText } from '@core/utils/formatters'
import { capitalizeFirstLetter } from '@/helpers/utils'
import employees from '@/pages/components/bravo/usersMultiSelect.vue'
import presenceStatus from '@/pages/components/bravo/statusMultiSelect.vue'

const invoiceListStore = useInvoiceStore() 
const searchQuery = ref('')
const dateRange = ref('')
const selectedStatus = ref()
const totalInvoices = ref(0)
const invoices = ref([])
const selectedRows = ref([])

const emit = defineEmits([
  'onAction',
]);

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
    align: 'center'
  },
  
  {
    title: 'employé',
    key: 'user',
  },

  {
    title: '01-12-2024',
    key: 'day_1',
    sortable: false,
    align: 'center'
  },
  {
    title: '02-12-2024',
    key: 'day_2',
    align: 'center'
  },
  {
    title: '03-12-2024',
    key: 'day_3',
    align: 'center'

  },
  {
    title: '04-12-2024',
    key: 'day_4',
    align: 'center'
  },
  {
    title: '05-12-2024',
    key: 'day_5',
    align: 'center'
  },
  {
    title: '06-12-2024',
    key: 'day_6',
    align: 'center'

  },
  {
    title: '07-12-2024',
    key: 'day_7',
    align: 'center'
  },

  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
    align: 'center'
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
})

// weeks
const getWeek = function(wekk="") {
  console.log(wekk);
}

const btnAction = function(item, action) {
  emit('onAction', item, action);
}

const week = "Du 01-12-2024 au 07-12-2024";

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
      <div class="d-flex align-end flex-wrap gap-3 my-3">
        <!-- 👉 status  -->
        <div class="stat-list">
         <presence-status />
        </div>
        <!-- 👉 employees  -->
        <div class="employees-list">
         <employees />
        </div>
        <!-- 👉 weeks  -->
        <div class="weeks d-none">
          <VIcon
            icon="tabler-square-arrow-left"
            class="cursor-pointer"
            @click="getWeek('left')"
            >
          </VIcon>
          <b>{{week}}</b>
          <VIcon
          icon="tabler-square-arrow-right"
          @click="getWeek('right')"
          >
          </VIcon>
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

      <!-- client -->
      <template #item.user="{ item }">
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

      <!-- day 1 -->
      <template #item.day_1="{ item }">
        <VTooltip>
          <template #activator="{ props }">
            <VAvatar
              :size="30"
              v-bind="props"
              :color="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).variant"
              variant="tonal"
            >
              <VIcon
                :size="20"
                :icon="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).icon"
                @click="emit('onAction', item.raw, 'edit')"
              />
            </VAvatar>
          </template>
          <p class="mb-0">
            {{ item.raw.invoiceStatus }}
          </p>
          <p class="mb-0">
            Début: 10h01
          </p>
          <p class="mb-0">
            Fin: 13H12
          </p>
        </VTooltip>
      </template>

      <!-- day 2 -->
      <template #item.day_2="{ item }">
        <VTooltip >
          <template #activator="{ props }">
            <VAvatar
              :size="30"
              v-bind="props"
              :color="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).variant"
              variant="tonal"
            >
              <VIcon
                :size="20"
                :icon="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).icon"
                @click="emit('onAction', item.raw, 'edit')"
              />
            </VAvatar>
          </template>
          <p class="mb-0">
            {{ item.raw.invoiceStatus }}
          </p>
          <p class="mb-0">
            Débu: 09h30
          </p>
          <p class="mb-0">
            Fin: x
          </p>
        </VTooltip>
      </template>

      <!-- day 3 -->
      <template #item.day_3="{ item }">
        <VTooltip>
          <template #activator="{ props }">
            <VAvatar
              :size="30"
              v-bind="props"
              :color="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).variant"
              variant="tonal"
            >
              <VIcon
                :size="20"
                :icon="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).icon"
                @click="emit('onAction', item.raw, 'edit')"
              />
            </VAvatar>
          </template>
          <p class="mb-0">
            {{ item.raw.invoiceStatus }}
          </p>
          <p class="mb-0">
            Début: 07H15
          </p>
          <p class="mb-0">
            Fin: 18H00
          </p>
        </VTooltip>
      </template>

      <!-- day 4 -->
      <template #item.day_4="{ item }">
        <VTooltip>
          <template #activator="{ props }">
            <VAvatar
              :size="30"
              v-bind="props"
              :color="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).variant"
              variant="tonal"
            >
              <VIcon
                :size="20"
                :icon="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).icon"
                @click="emit('onAction', item.raw, 'edit')"
              />
            </VAvatar>
          </template>
          <p class="mb-0">
            {{ item.raw.invoiceStatus }}
          </p>
          <p class="mb-0">
            Début: x
          </p>
          <p class="mb-0">
            Fin: x
          </p>
        </VTooltip>
      </template>

      <!-- day 5 -->
      <template #item.day_5="{ item }">
        <VTooltip>
          <template #activator="{ props }">
            <VAvatar
              :size="30"
              v-bind="props"
              :color="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).variant"
              variant="tonal"
            >
              <VIcon
                :size="20"
                :icon="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).icon"
                @click="emit('onAction', item.raw, 'edit')"
              />
            </VAvatar>
          </template>
          <p class="mb-0">
            {{ item.raw.invoiceStatus }}
          </p>
          <p class="mb-0">
            Début: 08H01
          </p>
          <p class="mb-0">
            Fin: 15H00
          </p>
        </VTooltip>
      </template>

      <!-- day 6 -->
      <template #item.day_6="{ item }">
        <VTooltip>
          <template #activator="{ props }">
            <VAvatar
              :size="30"
              v-bind="props"
              :color="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).variant"
              variant="tonal"
            >
              <VIcon
                :size="20"
                :icon="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).icon"
                @click="emit('onAction', item.raw, 'edit')"
              />
            </VAvatar>
          </template>
          <p class="mb-0">
            {{ item.raw.invoiceStatus }}
          </p>
          <p class="mb-0">
            Début: 09H21
          </p>
          <p class="mb-0">
            Fin: 12H09
          </p>
        </VTooltip>
      </template>

      <!-- day 7 -->
      <template #item.day_7="{ item }">
        <VTooltip>
          <template #activator="{ props }">
            <VAvatar
              :size="30"
              v-bind="props"
              :color="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).variant"
              variant="tonal"
            >
              <VIcon
                :size="20"
                :icon="resolveInvoiceStatusVariantAndIcon(item.raw.invoiceStatus).icon"
                @click="emit('onAction', item.raw, 'edit')"
              />
            </VAvatar>
          </template>
          <p class="mb-0">
            {{ item.raw.invoiceStatus }}
          </p>
          <p class="mb-0">
            Début: x
          </p>
          <p class="mb-0">
            Fin: x
          </p>
        </VTooltip>
      </template>

      <!-- Actions -->
      <template #item.actions="{ item }">
        <IconBtn>
          <VIcon icon="tabler-download" @click="btnAction(item, 'download')"/>
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
