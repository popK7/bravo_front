<script setup>
const props = defineProps({
  notifications: {
    type: Array,
    default: () => []
  }

});
</script>
<template>
  <div v-if="props.notifications.length">
    <VAlert
      border="start"
      border-color="error"
      class="mt-2"
      v-for="(notification, index) of props.notifications" :key="index" :value="notification.title"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>
    
  </div>
  <p v-else>Vous n'avez aucune notifications</p>
</template>
