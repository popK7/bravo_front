<script setup>

const emit = defineEmits(['onSelected']);

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

const resolveStatusColor = {
    'En vigueur': 'success',
    'Archive': 'warning',
    'Offline': 'secondary',
    'In Meeting': 'error',
};

const handleSelect = function(item) {
  emit("onSelected",item);
}

const libelle = function (start, end) {
    return end ? `${start} - ${end}` : start;
};


</script>

<template>
<div>
   
    <VList lines="tree" v-if="props.items.length" border>
       
        <template v-for="(item, index) of props.items" :key="item.id">
            <VListItem @click="handleSelect(item)">
                <VListItemTitle>
                    {{ libelle(item.start_at, item.end_at) }}
                </VListItemTitle>
                <VListItemSubtitle class="mt-1">
                    <VBadge dot location="start center" offset-x="2" :color="resolveStatusColor[item.status]" class="me-3">
                        <span class="ms-4">{{ item.status }}</span>
                    </VBadge>
                </VListItemSubtitle>

                <template #append>
                    <span>{{ `${item.salary}${item.currency.name} par ${item.frequency.name}` }}</span>
                </template>

            </VListItem>
            <VDivider v-if="index !== item.length - 1" />
        </template>
    </VList>

    <div class="mt-5" v-else>
      <h4 class="text-center">Aucunne donnée trouvée</h4>
    </div>
</div>
</template>

