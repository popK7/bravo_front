<script setup>

const emit = defineEmits([
  'onSelect'
]);

const props = defineProps({
  items:{
    type: Array,
    default: () => []
  }
});

const resolveStatusColor = {
    'Online': 'success',
    'Away': 'warning',
    'Offline': 'secondary',
    'In Meeting': 'error',
};

const handleClick = function(item) {
  emit('onSelect', item);
};

</script>

<template>
<div>
    <VList lines="two" v-if="props.items.length" border>
        <template v-for="(item, index) of props.items" :key="item.id">
            <VListItem @click="handleClick(item)">
                <VListItemTitle>
                    {{ item.subject }}
                </VListItemTitle>

                <VListItemSubtitle class="mt-1">
                    <span class="text-xs text-disabled">
                      {{`Du ${item.from} au  ${item.to} il y a 3 min`}}
                    </span>
                </VListItemSubtitle>

                <template #append>
                    <h6>Le {{ item.date }}</h6>
                </template>

            </VListItem>
            <VDivider v-if="index !== items.length - 1" />
        </template>
    </VList>
    <div class="mt-5" v-else>
      <h4 class="text-center">Aucunne donnée trouvée</h4>
    </div>
</div>
</template>
