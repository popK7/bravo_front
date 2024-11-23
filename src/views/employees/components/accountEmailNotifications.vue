<script>
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on');
</script>

<template>
<VRow>
    <!-- Absences -->
    <VCol cols="3">
        <p>Absences</p>
    </VCol>
    <VCol cols="9">
        <VSwitch /> 
        <p class="mt-3">Notifications concernant les demandes d'absence. Si elles sont désactivées, elles sont uniquement notifiées dans kiwiHR.</p>
    </VCol>
    <!-- Paie -->
    <VCol cols="3">
        <p>Paie</p>
    </VCol>
    <VCol cols="9">
        <VSwitch />
        <p class="mt-3">Notifications concernant les données de rémunération et les cycles de paie si vous êtes approbateur. Si elles sont désactivées, vous les recevrez uniquement dans kiwiHR.</p>
    </VCol>
    <!-- Notes de frais -->
    <VCol cols="3">
        <p>Notes de frais</p>
    </VCol>
    <VCol cols="9">
        <VSwitch />
        <p class="mt-3"> Notifications concernant les demandes de notes de frais. Si elles sont désactivées, elles sont uniquement notifiées dans kiwiHR.</p>
    </VCol>
    <!-- Résumé hebdomadaire -->
    <VCol cols="3">
        <p class="mt-3">Résumé hebdomadaire</p>
    </VCol>
    <VCol cols="9">
        <VSwitch />
        <p class="mt-3">Notifications envoyées tous les lundis concernant les absences, les évènements d'employés et les jours fériés. Si elles sont désactivées, vous ne les recevrez pas.</p>
    </VCol>
</VRow>
</template>
