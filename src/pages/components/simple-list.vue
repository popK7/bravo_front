<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const props = defineProps({
 
  items: {
    type: Array,
    required: true,
    default: () => []
  },
});

</script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(item, index) of props.items"
      :key="index"
    >
      <VListItem>
        <VListItemTitle>
          <span class="fw-bold">{{ item.name }}</span>
        </VListItemTitle>

        <template #append>
          <span class="fw-bold">{{item.value }}</span>
        </template>
      </VListItem>
      <VDivider v-if="index !== items.length - 1" />
    </template>
  </VList>
</template>
<style lang="scss" scoped>

.fw-bold {
  font-weight: 700;
}
.v-list-item--density-comfortable.v-list-item--two-line {
    min-height: 40px;
    padding-top: 6px;
    padding-bottom: 6px;
}
</style>
