<script setup>

const props = defineProps({
  title: {
    type: String,
    require: true
  }
});
const emit = defineEmits([
  'onClick'
]);

</script>

<template>
     <div class="d-flex justify-content-between mb-5">
          <h4 class="#">{{ props.title }}</h4>
          <VBtn size="small" @click="emit('onClick')">
              Ajouter
              <VIcon
                end 
                icon="tabler-checkbox"
              />
          </VBtn>
      </div>
</template>

<style>
  .justify-content-between {
    justify-content: space-between;
  }
</style>

