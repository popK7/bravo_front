<script setup>

const items = [
  {
    name: 'LUN.',
    value: '08H00',
    total: 8,
  },
  {
    name: 'MAR.',
    value: '08H00',
    total: 8,
  },
  {
    name: 'MER.',
    value: '08H00',
    total: 8,
  },
  {
    name: 'VEN.',
    value: '08H00',
    total: 8,
  },
  {
    name: 'SAM.',
    value: '08H00',
    total: 8,
  },
  {
    name: 'DIM',
    value: '--',
    total: 0,
  },
  {
    name: 'TOTAL',
    value: '46H',
    total: 46,
  },
]

const resolveStatusColor = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
</script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(user, index) of items"
      :key="user.name"
    >
      <VListItem>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">

          <span class="text-xs text-disabled">Jour de la semaine</span>
        </VListItemSubtitle>

        <template #append>
          <span>{{ user.value}}</span>
        </template>
      </VListItem>
      <VDivider v-if="index !== items.length - 1" />
    </template>
  </VList>
</template>
