<script setup>
const files = [
  {
    color: 'blue',
    icon: 'tabler-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'tabler-device-mobile-rotated',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
  {
    color: 'amber',
    icon: 'tabler-device-mobile-rotated',
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
];
</script>

<template>
  <VList lines="two">

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-download"
        />
      </template>
    </VListItem>
  </VList>
</template>
