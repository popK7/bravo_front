<script setup>
import NavBarSetting from '@core/components/BtnSetting.vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'

const { isAppRtl } = useThemeConfig()

const requests = [
  {
    label: 'Ajouter une demande',
    i18nLang: 'AbsenceRequest',
    to: { name: 'employees-id', params:{id: 50}, query:{tab: 'demands'} },
    isClient: true
  },
  {
    label: 'Ajouter une note de frais',
    i18nLang: 'ExpenseNoteRequest',
    to:{ name: 'employees-id', params:{id: 50}, query:{tab: 'expense_notes'} },
    isClient: true
  },
  {
    label: 'Import employees',
    i18nLang: 'EmployeesImportRequest',
    to: { name: 'apps-calendar' },
    isClient: false
  },
]

const handleLangChange = co => {
  console.log(co);
};
</script>

<template>
  <NavBarSetting 
    :items="requests"
    icon="tabler-square-rounded-plus-filled"
    @change="handleLangChange"
  />
</template>
