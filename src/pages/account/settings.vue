<script setup>
const items = [{
  id: 1,
  name: 'Roles test and Permissions',
  description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée',
  sub_modules: [{
    id: 1,
    name: 'Roles & Permissons',
    to: 'roles',
    icon: 'tabler-circles-relation',
  }],
},
{
  id: 2,
  name: 'Account',
  description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée',
  sub_modules: [{
    id: 21,
    name: 'Manager',
    to: 'settings/company/account',
    icon: 'tabler-lock-open',
  },

  {
    id: 22,
    name: 'Profile',
    to: 'site.list',
    icon: 'tabler-lock-open',
  },
  {
    id: 23,
    name: 'Languages',
    to: 'department.list',
    icon: 'tabler-message-language',
  }],
},
{
  id: 3,
  name: 'Enterprise structures',
  description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée',
  sub_modules: [{
    id: 31,
    name: 'Sites',
    to: 'site.list',
    icon: 'tabler-lock-open',
  },
  {
    id: 32,
    name: 'Departments',
    to: 'department.list',
    icon: 'tabler-lock-open',
  },
  {
    id: 33,
    name: 'Functions',
    to: 'function.list',
    icon: 'tabler-lock-open',
  }],
},
{
  id: 4,
  name: 'Presences',
  description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée',
  sub_modules: [{
    id: 41,
    name: 'Timetable',
    to: 'presence_regime.list',
    icon: 'tabler-lock-open',
  }],
},
{
  id: 5,
  name: 'Absences',
  description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée',
  sub_modules: [{
    id: 51,
    name: 'Absence types',
    to: 'absence_type.list',
    icon: 'tabler-lock-open',
  },
  {
    id: 52,
    name: 'Absence regimes',
    to: 'absence_regime.list',
    icon: 'tabler-lock-open',
  }],
},
{
  id: 6,
  name: 'Materials',
  description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée',
  sub_modules: [{
    id: 51,
    name: 'Material types',
    to: 'material.list',
    icon: 'tabler-lock-open',
  },
  {
    id: 52,
    name: 'Materials',
    to: 'Permission.list',
    icon: 'tabler-lock-open',
  }],
},
{
  id: 6,
  name: 'Pay',
  description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée',
  sub_modules: [{
    id: 61,
    name: 'Additional remuneration',
    to: 'additional-remunerations',
    icon: 'tabler-lock-open',
  }],
},
{
  id: 7,
  name: 'Expense Note',
  description: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée',
  sub_modules: [{
    id: 61,
    name: 'Expense Note categories',
    to: 'additional-remunerations',
    icon: 'tabler-lock-open',
  }],
}]

import SettingCard from '../components/SettingCard.vue';
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="12"
    >
      <VCard title="Settings">
        <VRow>
          <SettingCard :modules="items" />
        </VRow>
      </VCard>
    </VCol>
    <VCol
      v-if="$can('read', 'Admin')"
      cols="12"
      md="6"
    >
      <VCard title="Analytics">
        <VCardText>User with 'Analytics' subject's 'Read' ability can view this card</VCardText>
        <VCardText class="text-danger">
          This card is visible to 'admin' only
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<route lang="yaml">
meta:
  action: read
  subject: AclDemo
</route>
