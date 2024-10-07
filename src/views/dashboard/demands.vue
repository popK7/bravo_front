<script setup>

const toggleCheckboxThree = ref(true)

const toggleCheckboxThreeFalse = ref(false)

const capitalizedLabel = label => {
    const convertLabelText = label.toString()

    return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}

const props = defineProps({
  items:{
    type: Array,
    default:() => []
  }
})

const resolveStatusColor = {
    'Online': 'success',
    'Away': 'warning',
    'Offline': 'secondary',
    'In Meeting': 'error',
};
</script>

<template>
<VList lines="two" border v-if="props.items.length">
    <template v-for="(demand, index) of props.items" :key="index">
        <VListItem>
            <template #prepend>
                <VAvatar :image="demand.avatar" />
            </template>
            <VListItemTitle>
                {{ demand.name }}
            </VListItemTitle>
            <VListItemSubtitle class="mt-1">
                <VBadge dot location="start center" offset-x="2" :color="resolveStatusColor[demand.status]" class="me-3">
                    <span class="ms-4"><b>Congé Payé</b> Du 22 jan 2024 au 23 fev 2024</span>
                </VBadge>

                <span class="text-xs text-disabled">il y a  {{ demand.lastVisited }}</span>
            </VListItemSubtitle>

            <template #append>
                <VCheckbox v-model="toggleCheckboxThreeFalse" true-icon="tabler-circle-x" false-icon="tabler-circle-x" color="error" />
                <VCheckbox v-model="toggleCheckboxThree" true-icon="tabler-check" false-icon="tabler-check" color="error" />
            </template>
        </VListItem>
    </template>
</VList>
<p v-else>Vous n'avez rien à valider</p>
</template>
