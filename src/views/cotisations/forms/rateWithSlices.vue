<script setup>

const props = defineProps({
  key: {
    type: Number,
    default: 0
  },
  indice: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['onRemove'])

const rate = ref();
const limit = ref();
const min = ref();
const max = ref();

console.log(props.indice);     

const remove = function() {
  emit("onRemove", props.indice)
  console.log('success removed');
};
</script>

<template>
<VRow>
    <!-- 👉 Rate -->
    <VCol cols="6">
        <AppTextField label="Taux" type="number" placeholder="Taux applicable" v-model="rate" />
    </VCol>
    <VCol cols="6">
        <AppTextField label="Plafond" type="number" placeholder="Limite" v-model="limit" />
    </VCol>
    <!-- 👉 Min salary -->
    <VCol cols="6">
        <AppTextField label="Salaire Min" type="number" placeholder="Limite" v-model="min" />
    </VCol>
    <!-- 👉 Max salary -->
    <VCol cols="6">
        <AppTextField label="Salaire Max" type="number" placeholder="Limite" v-model="max" />
    </VCol>
     <!-- 👉 delete -->
    <VCol cols="12" class="text-center">
      <IconBtn @click="remove()">
          <VIcon icon="tabler-trash" variant="success"/>
        </IconBtn>
    </VCol>
    <!-- 👉 divider -->
    <VCol cols="12" class="mt-1 mb-1">
      <VDivider />
    </VCol>
</VRow>
</template>
