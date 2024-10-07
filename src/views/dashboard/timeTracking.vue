<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const users = [
  {
    name: 'Attendu',
    value: '48H00'
  },
  {
    name: 'Réalisé',
    value: '09H00'
  },
  {
    name: 'Heures Sup',
    value: '02H00'
  }
]

const resolveStatusColor = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
};
</script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <VListItemTitle>
          <h4>{{ user.name }}</h4>
        </VListItemTitle>

        <template #append>
          <h4>{{user.value}}</h4>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
