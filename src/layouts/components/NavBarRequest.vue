<script setup>
import NavBarSetting from '@core/components/BtnSetting.vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'

const { isAppRtl } = useThemeConfig()

const requests = [
  {
    label: 'Request an absence',
    i18nLang: 'AbsenceRequest',
    to: { name: 'apps-calendar' },
  },
  {
    label: 'Create an expense report',
    i18nLang: 'ExpenseNoteRequest',
    to: { name: 'apps-calendar' },
  },
  {
    label: 'Import employees',
    i18nLang: 'EmployeesImportRequest',
    to: { name: 'apps-calendar' },
  },
]

const handleLangChange = co => {
  console.log(co);
}
</script>

<template>
  <NavBarSetting 
    :items="requests"
    icon="tabler-square-rounded-plus-filled"
    @change="handleLangChange"
  />
</template>
