<script setup>
import {
    confirmedValidator,
    emailValidator,
    passwordValidator,
    requiredValidator,
} from '@validators'
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const emit = defineEmits([
  'onHandleSaveTeam'
]);
const responsables = [
    { name: 'Sandra Adams', avatar: avatar1 },
    { name: 'Ali Connors', avatar: avatar2 },
    { name: 'Trevor Hansen', avatar: avatar3 },
    { name: 'Tucker Smith', avatar: avatar4 },
    { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])


const refForm = ref('')
const password = ref()
const confirmPassword = ref('')
const items = ['Marketing', 'Logistique', 'IT', 'Direction']
const equipe = ref();
const Responsable = ref();

const save = function() {
  refForm.value ?.validate().then(({ valid }) => {
    if(valid) {
      emit('onHandleSaveTeam');
    }
  })
};
</script>

<template>
<VForm ref="refForm" @submit.prevent="save">
    <VRow>
      <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Equipe </label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppSelect v-model="equipe" :items="items" chips placeholder="Equipe" :rules="[requiredValidator]"/>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" md="12">
            <VRow no-gutters>
                <VCol cols="12" md="2" class="d-flex align-items-center">
                    <label class="v-label text-body-2 text-high-emphasis" for="Sexe">Responsable </label>
                </VCol>
                <VCol cols="12" md="10">
                  <AppSelect v-model="Responsable" :items="responsables" item-title="name" item-value="name" :rules="[requiredValidator]" placeholder="Responsable équipe" clearable clear-icon="tabler-x">
                <template #selection="{ item }">
                    <VChip>
                        <VAvatar start :image="item.raw.avatar" />
                        <span>{{ item.title }}</span>
                    </VChip>
                </template>
            </AppSelect>
                </VCol>
            </VRow>
        </VCol>

        <VCol cols="12" class="d-flex justify-content-between">
            <VBtn type="submit" @click="refForm?.validate()">
                 Enregistrer
            </VBtn>
        </VCol>
    </VRow>
</VForm>
</template>
<style scoped>
.justify-content-between{
  justify-content: flex-end;
}
</style>
