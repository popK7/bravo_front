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
          2FA statut
        </div>
    </VCol>
    <VCol cols="9">
        <p class="text-bold">Inactif</p>
        <p>Seuls l'e-mail et le mot de passe sont nécessaires pour se connecter au compte du collaborateur. L'activation de l'authentification à deux facteurs augmente la sécurité en exigeant l'envoi d'un code à 6 chiffres sur son e-mail lors de la connexion sur un nouvel appareil.</p>
        <AppTextField id="firstName" v-model="firstName" placeholder="Entrer une nouvelle addresse professionnelle" persistent-placeholder/>

        <VBtn class="mt-5" >
          Activer l'authentification deux facteursdx
        </VBtn>
    </VCol>
</VRow>
</template>
