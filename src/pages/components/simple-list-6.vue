<script setup>

const props = defineProps({
  departments: Array,
  default:() => []
})


const resolveStatusColor = {
    'En vigueur': 'success',
    'Archive': 'warning',
    'Offline': 'secondary',
    'In Meeting': 'error',
};

const libelle = function (start, end) {

    return end ? `${start} - ${end}` : start;
};
</script>

<template>
<div>

    <VList lines="tree" border v-if="props.departments">
        <template v-for="(departemnt, index) of props.departments" :key="departemnt.name">
            <VListItem>
                <VListItemTitle>
                    {{ departemnt.name }}
                </VListItemTitle>
                <template #append>
                    <div class="v-avatar-group">
                        <VAvatar :size="42" v-for="team of departemnt.teams">
                            <VImg :src="team" />
                            <VTooltip activator="parent" location="top">
                                John Doe
                            </VTooltip>
                        </VAvatar>
                    </div>
                </template>

            </VListItem>
        </template>
    </VList>
    <p v-else>Vous n'avez aucune équipe</p>
</div>
</template>
