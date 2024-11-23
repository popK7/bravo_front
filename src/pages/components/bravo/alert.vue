<script setup>

const props = defineProps({
    color: {
        type: String,
        default: 'success',
    },
    message: {
        type: String,
        default: ''
    },
    isVisible: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
<VSnackbar v-model="props.isVisible" variant="flat" :color="props.color" location="top end" transition="scroll-y-reverse-transition">
    {{ props.message }}
    <template #actions>
        <VBtn color="default" @click="isVisible = false">
            Fermer
        </VBtn>
    </template>
</VSnackbar>
</template>
