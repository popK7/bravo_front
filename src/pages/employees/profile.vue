<script setup>
import ProfileView from '@/views/employees/profile.vue'
const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
  loader: {
    type: Boolean,
    default: true,
    required: false,
  },
});
</script>
<template> 
  <div>
    <profile-view :user-data="props.userData"></profile-view>
  </div>
</template>
