<script setup>
const open = ref(['TimeSheet'])

// Props
const props = defineProps({
    data: {
        type: Array,
        required: true,
    }
})
// Emit
const emit = defineEmits(['click']);
// Functions
const handleClick = function (nav) {
    emit('click', nav.component, nav.value)
}
</script>

<template>
<VList v-model:opened="open">
    <div v-for="nav in props.data" :value="nav.value" :key="nav.id">
        <VListItem v-if="nav.items.length == 0" :prepend-icon="nav.icon" :title="nav.title" :value="nav.value" @click="handleClick(nav)" />

        <VListGroup v-else>
            <template #activator="{ props }">
                <VListItem v-bind="props" :prepend-icon="nav.icon" :title="nav.title" />
            </template>

            <VListItem v-for="item in nav.items" :prepend-icon="item.icon" :title="item.title" :value="item.value" :key="item.id" @click="handleClick(item)" />
        </VListGroup>
    </div>

</VList>
</template>
