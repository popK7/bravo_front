<script setup>

const props = defineProps({
  employees:{
    type:Array,
    default: () => []
  }
});

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
    v-if="props.employees.length"
  >
    <template
      v-for="(employee, index) of props.employees"
      :key="index"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="employee.avatar" />
        </template>
        <VListItemTitle>
          {{ employee.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <b class="#">{{employee.position}}</b>
        </VListItemSubtitle>
      </VListItem>
      <VDivider v-if="index !== props.employees.length - 1" />
    </template>
  </VList>
  <p v-else>Aucun employé en vancance</p>
</template>
