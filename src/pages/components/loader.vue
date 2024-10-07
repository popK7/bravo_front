<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  isLoaderVisible: {
    type: Boolean,
    default: false, 
  },
})
console.log(props.isLoaderVisible);  
const isDialogVisible = ref(props.isLoaderVisible)   



watch(isDialogVisible, (value) => { 
  console.log(value);
});

</script>

<template>
  <!-- Dialog Activator -->
 

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
