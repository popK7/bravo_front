<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    required: true,
    default: () => {}
  }
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
])

const isFormValid = ref(false)
const refForm = ref()
const first_name = ref('Eric')
const last_name = ref('Kayupe')
const email = ref('kayupe@gmail.com')
const personal_phone = ref('00212649583300')
const lang = ref("1")
const hour_regime = ref("1")
const absence_regime = ref("1")
const team_leader = ref("1")
const departemnt = ref("Logistique & transport")
const position = ref("Directeur")
const site = ref("1")
const status = ref("pending")
const role = ref("admin")
const send_invitation = ref(false)

// Resources
const languages = props.data.languages
const managers = props.data.managers
const teams = props.data.teams
const sites = props.data.sites
const positions = props.data.positions
const hour_regimes = props.data.hour_regimes
const absence_regimes =  props.data.absence_regimes
const roles = props.data.roles
// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('userData', {
        id: 0,
        fullName: `${first_name.value} ${last_name.value}`,
        email: email.value,
        personal_phone: personal_phone.value,
        company: 'Yotz PVT LTD',
        role: role.value,
        team_leader: team_leader.value,
        department: departemnt.value,
        position: position.value,
        lang: lang.value,
        send_invitation: send_invitation.value,
        site: site.value,
        hour_regime: hour_regime.value,
        absence_regime: absence_regime.value,
        status: status.value,
        avatar: '',
        billing: 'Auto Debit',
        country: 'El Salvador',
        contact: '(479) 232-9151',
      })
      emit('update:isDrawerOpen', false)
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      title="Ajouter un employé"
      @cancel="closeNavigationDrawer"
    />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- 👉 first name -->
              <VCol cols="12">
                <AppTextField
                  v-model="first_name"
                  :rules="[requiredValidator]"
                  label="Nom"
                  placeholder="Nom"
                />
              </VCol>

              <!-- 👉 Last name -->
              <VCol cols="12">
                <AppTextField
                  v-model="last_name"
                  :rules="[requiredValidator]"
                  label="Prénom"
                  placeholder="Prénom"
                />
              </VCol>

              <!-- 👉 E-mail -->
              <VCol cols="12">
                <AppTextField
                  v-model="email"
                  :rules="[requiredValidator, emailValidator]"
                  label="E-mail"
                  placeholder="E-mail"
                />
              </VCol>

              <!-- 👉 phone -->
              <VCol cols="12">
                <AppTextField
                  v-model="personal_phone"
                  :rules="[requiredValidator]"
                  type="number"
                  label="Téléphone"
                  placeholder="Téléphone"
                />
              </VCol>

              <!-- 👉 Languages -->
              <VCol cols="12">
                  <AppSelect v-model="lang" label="Langue" :rules="[requiredValidator]" placeholder="Selectionnez une langue" :items="languages" />
                  <span class="d-block mt-2 text-warning">Sélectionnez la langue de l'interface</span>
              </VCol>
              <!-- 👉  -->
              <VCol cols="12">
              <VSwitch
                  v-model="send_invitation"
                  :inset="false"
                  label="Envoyer une invitation de connexion"
                />
              </VCol>
              <VCol cols="12">
              <h3>Données professionnelles</h3>
            </VCol>
              <VDivider />

              <!-- 👉 Responsable d'équipe -->
              <VCol cols="12">
                <AppSelect
                  v-model="team_leader"
                  label="Responsable d'équipe"
                  :rules="[requiredValidator]"
                  placeholder="Selectionnez"
                  :items="managers"
                />
              </VCol>

              <!-- 👉 Department -->
              <VCol cols="12">
                <AppSelect
                  v-model="departemnt"
                  label="Equipe"
                  :rules="[requiredValidator]"
                  placeholder="Selectionnez"
                  :items="teams"
                />
              </VCol>

              <!-- 👉 Function -->
              <VCol cols="12">
                <AppSelect
                  v-model="position"
                  label="Function"
                  :rules="[requiredValidator]"
                  placeholder="Selectionnez"
                  :items="positions"
                />
              </VCol>

              <!-- 👉 Site -->
              <VCol cols="12">
                <AppSelect
                  v-model="site"
                  label="Site"
                  :rules="[requiredValidator]"
                  placeholder="Selectionnez"
                  :items="sites"
                />
              </VCol>

              <!-- 👉 hour regime -->
              <VCol cols="12">
                <AppSelect
                  v-model="hour_regime"
                  label="Regime horaire"
                  placeholder="Selectionnez"
                  :rules="[requiredValidator]"
                  :items="hour_regimes"
                />
              </VCol>

              <!-- 👉 absence regime -->
              <VCol cols="12">
                <AppSelect
                  v-model="absence_regime"
                  label="Regime Absence"
                  placeholder="Selectionnez"
                  :rules="[requiredValidator]"
                  :items="absence_regimes"
                />
              </VCol>

              <!-- 👉 roles -->
              <VCol cols="12">
                <AppSelect
                  v-model="role"
                  label="Role"
                  placeholder="Selectionnez"
                  :rules="[requiredValidator]"
                  :items="roles"
                />
              </VCol>

              <!-- 👉 Status -->
              <VCol cols="12">
                <AppSelect
                  v-model="status"
                  label="Status"
                  placeholder="Choisir un status"
                  :rules="[requiredValidator]"
                  :items="[{ title: 'Active', value: 'active' }, { title: 'Inactive', value: 'inactive' }, { title: 'Pending', value: 'pending' }]"
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="Enregistrer"
                  class="me-3"
                >
                  Enregistrer
                </VBtn>
                <VBtn
                  type="reset"
                  variant="tonal"
                  color="secondary"
                  @click="closeNavigationDrawer"
                >
                  Annuler
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
