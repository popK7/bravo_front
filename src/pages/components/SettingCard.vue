<script setup>
const props = defineProps({
  modules: {
    type: Array,
    required: false,
    default: () => (
      [{
        id: '***',
        name: '***',
        description: '***',
        sub_modules: [{
          id: '***',
          name: '***',
          to: '***',
          icon: 'tabler-lock-open',
        }],
      }]
    ),
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'submit',
  'update:isDialogVisible',
])

const router = useRouter()
</script>

<template>





</template>
