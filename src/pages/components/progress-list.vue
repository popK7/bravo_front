<script setup>
const languageProgress = [
  {
    avatar: 'tabler-brand-react',
    title: 'Congés payés',
    language: 'react',
    amount: 90,
    solde: 120,
    total: 7
  },
  {
    avatar: 'tabler-brand-bootstrap',
    title: 'Congés maladies',
    language: 'bootstrap',
    amount: 80,
    solde: 120,
    total: 7
  },
  {
    avatar: 'tabler-brand-vue',
    title: 'Teletravail',
    language: 'vue',
    amount: 65,
    solde: 120,
    total: 7
  },
  {
    avatar: 'tabler-brand-angular',
    title: 'Mai',
    language: 'angular',
    amount: 75,
    solde: 120,
    total: 7
  },
  {
    avatar: 'tabler-brand-javascript',
    title: 'Rte',
    language: 'javascript',
    amount: 70,
    solde: 120,
    total: 7
  },
]

const resolveStatusColor = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
</script>

<template>
  <div>
    <VList
    lines="two"
    border
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem class="progress_list">
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
          <span>{{ progress.title }}</span>
        </template>

        <VListItemTitle>
          <div class="indicators_title">
            <span>{{ `${progress.solde} jours` }}</span>
            <span>{{ `${progress.total} jours Pris` }}</span>
          </div>
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            :model-value="progress.amount"
            bg-color="secondary"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
  </div>

</template>

<style>
.progress_list{
  padding: 1% !important;
  display: block !important;
}
.v-list-item__prepend {
  margin-bottom: 2%;
}
.indicators_title {
  display: flex;
  justify-content: space-between;
  font-weight: 600 !important;
}
.text-bold {
  font-weight: 600 !important;
}
</style>
