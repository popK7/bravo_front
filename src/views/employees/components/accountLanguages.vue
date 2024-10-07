<script setup>
const items = [
    'Foo',
    'Bar',
    'Fizz',
    'Buzz',
];
</script>

<template>
<div>
    <VRow>
        <VCol cols="3">
            <div>
                Langue
            </div>
        </VCol>
        <VCol cols="9">
            <AppSelect :items="items" placeholder="Choisir une langue" />
            <span class="d-block text-warning mt-2">Sélectionnez la langue dans laquelle vous souhaitez utiliser BravoRH</span>
        </VCol>
    </VRow>
</div>
</template>
