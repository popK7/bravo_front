<script setup>

const emit = defineEmits([
  "selected"
]);
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  category: {
    type: String,
    default: 'sites'
  }
});

const slectItem = function(item) {
  emit('selected', item)
};
</script>

<template>
  <VList
    lines="two"
    border
    v-if="props.items.length"
  >
    <template
      v-for="(item, index) of props.items"
      :key="index"
    >
      <VListItem 
      class="cursor-pointer"
      @click="slectItem(item)"
      >
        <template #prepend>
          <VIcon :icon="item.icon" />
        </template>
        <VListItemTitle>
          <div class="d-flex" style="flex-direction: column">
            <b>{{ item.name }}</b>
            <i class="text-small">{{item.description}}</i>
          </div>
        </VListItemTitle>

        <template #append>
          <VIcon icon="tabler-user" />
          <span>{{item.total}}</span>
        </template>
      </VListItem>
      <VDivider v-if="index !== props.items.length - 1" />
    </template>
  </VList>
  <p v-else>
    
    <VAlert
      border="start"
      border-color="warning"
    >
      Votre compte n'a pas encore des {{ props.category }}.
    </VAlert>
  </p>

</template>

<style>
  .text-small{
    size: 1px !important;
  }
</style>
