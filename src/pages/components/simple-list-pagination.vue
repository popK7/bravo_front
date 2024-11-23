<script setup>

const emit = defineEmits(['onSelect']);

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});

const handleClick = function (item) {
  emit('onSelect', item);
}

const currentPage = ref(1);
const items = props.data;

</script>

<template>
<div>
    <VList lines="two">

        <VListItem 
          v-for="item in items" 
          :key="item.id" 
          :title="item.title" 
          :subtitle="item.subtitle" 
          @click="handleClick(item)"
          class="cursor-pointer">
            <template #prepend>
                <VAvatar color="secondary" variant="tonal">
                    <VIcon :size="26" icon="tabler-folder" />
                </VAvatar>
            </template>

            <template #append>
                <div>
                    <VBtn variant="text" color="default" size="small" icon="tabler-info-circle" />
                    <span class="text-primary">{{ item.subtitle_bis }}</span>
                </div>
            </template>
        </VListItem>
    </VList>
    <div class="$$$">
      <VPagination v-model="currentPage" variant="outlined" :length="2" />
    </div>
   
</div>
</template>
<style>
  .back-color{
    background: #CCC;
  }
</style>
