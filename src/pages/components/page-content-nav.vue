<script setup>
const open = ref([
  'profil_data',
])

const props = defineProps({
    data: {
        type: Array,
        required: true,
    }
});

const emit = defineEmits(['click'])

const handleClick = function (nav) {
    emit('click', nav.tab)
};

</script>

<template>
  <VList v-model:opened="open">

    <div v-for="(item, i) in props.data" :key="i">
      <VListItem
      v-if="item.items?.length == 0"
      :prepend-icon="item.icon"
      :title="item.title"
      :value="item.value"
      @click="handleClick(item)"
    />

    <VListGroup v-else :value="item.value">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          :prepend-icon="item.icon"
          :title="item.title"
        />
      </template>
      <VListItem
          v-for="(nav, i) in item.items"
          :key="i"
          :value="nav.value"
          :title="nav.title"
          :prepend-icon="nav.icon"
          @click="handleClick(nav)"
        />
    </VListGroup>
    </div>


  </VList>
</template>

<style scoped>
.v-list-group__items .v-list-item { padding-inline-start: calc(0px + var(--indent-padding)) !important;}
</style>
