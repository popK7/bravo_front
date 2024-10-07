<script setup>
const items = [
    'Foo',
    'Bar',
    'Fizz',
    'Buzz',
];
</script>

<template>
<VRow>
    <VCol cols="3">
        <div>
            Adresse e-mail professionnelle
        </div>
    </VCol>
    <VCol cols="9">
        <p class="text-bold">yahama4415@polatrix.com</p>
        <p>Entrez ci-dessous un nouvel e-mail pour effectuer la demande de modification. L'employé doit confirmer le nouvel e-mail pour valider sa modification. Si l'employé n'a pas encore reçu d'invitation de connexion, la modification est immédiate.</p>
        <AppTextField id="firstName" v-model="firstName" placeholder="Entrer une nouvelle addresse professionnelle" persistent-placeholder/>

        <VBtn type="submit" class="mt-5" >
          Changer l'e-email
        </VBtn>
    </VCol>
</VRow>
</template>
