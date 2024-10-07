<script setup>
const files = [{
        color: 'blue',
        icon: 'tabler-clipboard-text',
        subtitle: 'Jan 20, 2014',
        title: '29 mai - 28 juin 2024',
    },
    {
        color: 'amber',
        icon: 'tabler-device-mobile-rotated',
        subtitle: 'Jan 10, 2014',
        title: '29 mai - 28 juin 2024',
    },
]

const folders = [{
        subtitle: 'Jour de paue Jan 9, 2014',
        title: '29 mai - 28 juin 2024',
    },
    {
        subtitle: 'Jour de paie Jan 17, 2014',
        title: '29 mai - 28 juin 2024',
    },
    {
        subtitle: 'Jour de paie Jan 28, 2014',
        title: '29 mai - 28 juin 2024',
    },
]
const hover = function () {
  isHover.value = true
}
const isHover = ref(false);
const hoverClass = reactive({
    'back-color': isHover
})
const currentPage = ref(1);
</script>

<template>
<div>
    <VList lines="two">

        <VListItem v-for="folder in folders" :key="folder.title" :title="folder.title" :subtitle="folder.subtitle" @mouseover="hover" class="cursor-pointer" :class="hoverClass">
            <template #prepend>
                <VAvatar color="secondary" variant="tonal">
                    <VIcon :size="26" icon="tabler-folder" />
                </VAvatar>
            </template>

            <template #append>
                <div>
                    <VBtn variant="text" color="default" size="small" icon="tabler-info-circle" />
                    <span class="text-primary">Jour de paie 12.12.12</span>
                </div>
            </template>
        </VListItem>
    </VList>
    <VPagination v-model="currentPage" variant="outlined" :length="5" rounded="circle" />
</div>
</template>
<style>
  .back-color{
    background: #CCC;
  }
</style>
