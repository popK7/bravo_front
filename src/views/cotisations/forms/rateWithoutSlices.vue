<script setup>
const rate = ref();
const limit = ref();
</script>

<template>
    <VRow>
<!-- 👉 Rate -->
<VCol cols="12">
        <AppTextField label="Taux" type="number" placeholder="Taux applicable" v-model="rate" />
    </VCol>

    <!-- 👉 plafond -->
    <VCol cols="12">
        <AppTextField label="Plafond" type="number" placeholder="Limite" v-model="limit" />
    </VCol>
    </VRow>
    
</template>
