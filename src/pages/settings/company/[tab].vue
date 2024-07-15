<script setup>
import AccountSettingsAccount from '@/views/pages/account-settings/AccountSettingsAccount.vue'
import AccountSettingsBillingAndPlans from '@/views/pages/account-settings/AccountSettingsBillingAndPlans.vue'
import AccountSettingsSecurity from '@/views/pages/account-settings/AccountSettingsSecurity.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  {
    title: 'Ownership',
    icon: 'tabler-users',
    tab: 'ownership',
  },
  {
    title: '0verview',
    icon: 'tabler-lock',
    tab: 'overview',
  },
  {
    title: 'localisation',
    icon: 'tabler-file-text',
    tab: 'localisation',
  },
]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      class="v-tabs-pill"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'settings-company-tab', params: { tab: item.tab } }"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="ownership">
        <AccountSettingsAccount />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="overview">
        <AccountSettingsSecurity />
      </VWindowItem>

      <!-- Billing -->
      <VWindowItem value="localisation">
        <AccountSettingsBillingAndPlans />
      </VWindowItem>
    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
