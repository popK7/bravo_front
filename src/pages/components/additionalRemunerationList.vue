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

const libelle = function (start, end) {
    return end ? `${start} - ${end}` : start;
}

const handleSelect = function(item) {
  emit("onSelected",item);
};

</script>

<template>
<div>
   
    <VList lines="tree" v-if="props.items.length" border>
        <template v-for="(item, index) of props.items" :key="item.id">
            <VListItem @click="handleSelect(item)">
              <template #prepend >
                    <span class="mr-5 text-bold w-20">{{item.type.name}}</span>
                </template>

                <VListItemTitle>
                    {{ libelle(item.start_at, item.end_at) }}
                </VListItemTitle>
                <VListItemSubtitle class="mt-1">
                    <VBadge dot location="start center" offset-x="2" :color="resolveStatusColor[item.name]" class="me-3">
                        <span class="ms-4">{{ item.status.name }}</span>
                    </VBadge>
                </VListItemSubtitle>
               
                <template #append>
                    <span>{{ `${item.value}${item.currency.name} par ${item.frequency.name}` }}</span>
                </template>

            </VListItem>
            <VDivider v-if="index !== items.length - 1" />
        </template>
    </VList>

    <div class="mt-5" v-else>
      <h4 class="text-center">Aucune donnée trouvée</h4>
    </div>
</div>
</template>
<style scoped>
 .w-20 {
  width: 180px;
 }
</style>
