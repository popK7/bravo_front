<script setup>
import { VForm } from 'vuetify/components/VForm'
import authV2RegisterIllustrationBorderedDark from '@images/pages/auth-v2-register-illustration-bordered-dark.png'
import authV2RegisterIllustrationBorderedLight from '@images/pages/auth-v2-register-illustration-bordered-light.png'
import authV2RegisterIllustrationDark from '@images/pages/auth-v2-register-illustration-dark.png'
import authV2RegisterIllustrationLight from '@images/pages/auth-v2-register-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import axios from '@axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import request from '@/helpers/request.js'

import {
  alphaDashValidator,
  emailValidator,
  requiredValidator,
} from '@validators'

const refVForm = ref()
const first_name = ref(null)
const last_name = ref(null)

const email = ref(null)
const phone = ref(null)

const password = ref(null)
const account = ref(null)


const privacyPolicies = ref(true)

// Router
const route = useRoute()
const router = useRouter()

// Ability
const ability = useAppAbility()

// Form Errors
const errors = ref({
  email: undefined,
  password: undefined,
})

const register = () => {
  axios.post('/auth/register', {
    username: username.value,
    email: email.value,
    password: password.value,
  }).then(r => {
    const { accessToken, userData, userAbilities } = r.data

    localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
    ability.update(userAbilities)
    localStorage.setItem('userData', JSON.stringify(userData))
    localStorage.setItem('accessToken', JSON.stringify(accessToken))

    // Redirect to `to` query if exist or redirect to index route
    router.replace(route.query.to ? String(route.query.to) : '/')
    
    return null
  }).catch(e => {
    const { errors: formErrors } = e.response.data

    errors.value = formErrors
    console.error(e.response.data)
  }).finally(() => {
    loader.value = false;
  })
}

const imageVariant = useGenerateImageVariant(authV2RegisterIllustrationLight, authV2RegisterIllustrationDark, authV2RegisterIllustrationBorderedLight, authV2RegisterIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const isPasswordVisible = ref(false)
const loader = ref(false)

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
  loader.value = true;
    if (isValid)
      register()
  })
};
</script>

<template>
  <VRow
    no-gutters
    class="auth-wrapper bg-surface"
  >
    <VCol
      lg="8"
      class="d-none d-lg-flex"
    >
      <div class="position-relative bg-background rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg
            max-width="441"
            :src="imageVariant"
            class="auth-illustration mt-16 mb-2"
          />
        </div>

        <VImg
          class="auth-footer-mask"
          :src="authThemeMask"
        />
      </div>
    </VCol>

    <VCol
      cols="12"
      lg="4"
      class="d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <VNodeRenderer
            :nodes="themeConfig.app.logo"
            class="mb-6"
          />
          <h5 class="text-h5 mb-1">
            {{ themeConfig.app.title }} 🚀
          </h5>
          <p class="mb-0 text-primary">
            Rendez la gestion RH simple et amusante !
          </p>
        </VCardText>

        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- compagny -->
              <VCol cols="12">
                <AppTextField
                  v-model="account"
                  autofocus
                  placeholder="Votre campanie"
                  :rules="[requiredValidator]"
                  label="Companie"
                />
              </VCol>


              <!-- Username -->
              <VCol cols="12">
                <VRow>
                  <VCol cols="6">
                    <AppTextField
                      v-model="first_name"
                      autofocus
                      :rules="[requiredValidator, alphaDashValidator]"
                      label="Prénom"
                      placeholder="Votre prénom"

                    />
                  </VCol>
                  <VCol cols="6">
                    <AppTextField
                      v-model="last_name"
                      autofocus
                      :rules="[requiredValidator, alphaDashValidator]"
                      label="Nom"
                      placeholder="Votre nom"
                    />
                  </VCol>
                </VRow>
              </VCol>

              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="email"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                  type="email"
                  placeholder="Email"

                />
              </VCol>

               <!-- phone -->
               <VCol cols="12">
                <AppTextField
                  v-model="phone"
                  :rules="[requiredValidator, emailValidator]"
                  label="Téléphone"
                  type="phone"
                  placeholder="Votre Téléphone"

                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="password"
                  :rules="[requiredValidator]"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  placeholder="Password"
                />

                <div class="d-flex align-center mt-2 mb-4">
                  <VCheckbox
                    id="privacy-policy"
                    v-model="privacyPolicies"
                    :rules="[requiredValidator]"
                    inline
                  >
                    <template #label>
                      <span class="me-1">
                        J'accèpte
                        <a
                          href="javascript:void(0)"
                          class="text-primary"
                        >les termes et conditions</a>
                      </span>
                    </template>
                  </VCheckbox>
                </div>

                <VBtn
                  block
                  type="submit"
                >
                  Enregistrer
                  <VProgressCircular :size="20" width="3" color="" indeterminate class="ml-2" v-show="loader" />

                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol
                cols="12"
                class="text-center text-base"
              >
                <span>Vous avez déjà un compte ?</span>
                <RouterLink
                  class="text-primary ms-2"
                  :to="{ name: 'login' }"
                >
                  Se connecter
                </RouterLink>
              </VCol>

              <VCol
                cols="12"
                class="d-flex align-center"
              >
                <VDivider />
                <span class="mx-4">ou</span>
                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol
                cols="12"
                class="text-center"
              >
                <AuthProvider />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
