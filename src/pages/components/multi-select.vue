<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

import { ref, watch } from 'vue'

const emit = defineEmits(['onChange']);
const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
    code:48
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
    code:49
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
    code:50
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
    code:47
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
    code:46
  },
]

const value = ref([47])
watch(value, async (newValue, oldValue) => {
  emit('onChange', {code: newValue})
})
</script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="code"
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <VAvatar
          start
          :image="item.raw.avatar"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
