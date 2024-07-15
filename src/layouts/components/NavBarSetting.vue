<script setup>
import NavBarSetting from '@core/components/BtnSetting.vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'

const { isAppRtl } = useThemeConfig()

const Settings = [
  {
    label: 'Cofigurations',
    i18nLang: 'AccountSettings',
    to: { name: 'settings' },
  },
  {
    label: 'Abonnements',
    i18nLang: 'AccountSubscriptions',
    to: { name: 'subscriptions' },
  },
  {
    label: 'API',
    i18nLang: 'AccountApis',
    to: { name: 'settings-connections', params: { tab: 'api' } },
  },
]

const handleLangChange = co => {
  console.log(co)
}
</script>

<template>
  <NavBarSetting
    :items="Settings"
    @change="handleLangChange"
  />
</template>
