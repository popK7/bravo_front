<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
const props = defineProps({
  manager: {
    type: String,
    default: 'fff'
  }
});
</script>

<template>
  <div class="#">
    <div class="justify-content-between" v-if="props.manager">
      <div class="d-flex">
        <VAvatar :image="avatar1" />
        <p class="mt-2 ml-2 cursor-pointer text-bold">Eric Kayupe</p>
      </div>
    </div>
    <p v-else>Vous n'avez aucun responsable</p>
  </div>
</template>

<style scoped>
</style>
