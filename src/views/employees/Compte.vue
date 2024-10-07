<script setup>
import LanguageForm from './components/accountLanguages.vue'
import PasswordForm from './components/accountPassword.vue'
import MailForm from './components/accountMail.vue'
import Auth2FC from './components/account2FC.vue'
import EmailNotification from './components/accountEmailNotifications.vue'
</script>
<template>
<VRow>
  <VCol cols="12">
    <VCard>
      <template #title>
        <h4>Préférences</h4>
      </template>
      <VCardText>
        <LanguageForm></LanguageForm>
      </VCardText>
      
    </VCard>
    
  </VCol>
  <VCol cols="12">
    <VCard>
      <template #title>
        <h4>Mot de passe</h4>
      </template>
      <VCardText>
        <PasswordForm></PasswordForm>
      </VCardText>
      
    </VCard>
    
  </VCol>
  <VCol cols="12">
    <VCard>
      <template #title>
        <h4>Adresse e-mail</h4>
      </template>
      <VCardText>
        <MailForm></MailForm>
      </VCardText>
      
    </VCard>
    
  </VCol>
  <VCol cols="12">
    <VCard>
      <template #title>
        <h4>Authentification à deux facteurs</h4>
      </template>
      <VCardText>
        <Auth2FC></Auth2FC>
      </VCardText>
      
    </VCard>
    
  </VCol>
  <VCol cols="12">
    <VCard>
      <template #title>
        <h4>Notifications par e-mail</h4>
      </template>
      <VCardText>
        <EmailNotification></EmailNotification>
      </VCardText>
      
    </VCard>
    
  </VCol>
</VRow>
</template>
