<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  location: {
    type: null,
    required: false,
    default: 'bottom end',
  },
  icon: {
    type: String,
    required: true,
    default: 'tabler-settings'
  }
})

const emit = defineEmits(['change'])

const { locale } = useI18n({ useScope: 'global' })

watch(locale, val => {
  document.documentElement.setAttribute('lang', val)
})

const currentLang = ref(['en'])
const router = useRouter();
</script>

<template>
  <IconBtn>
    <VIcon
      size="26"
      :icon="icon"
    />

    <!-- Menu -->
    <VMenu
      activator="parent"
      :location="props.location"
      offset="14px"
    >
      <!-- List -->
      <VList
        v-model:selected="currentLang"
        min-width="175px"
      >
        <!-- List item -->
        <VListItem
          v-for="item in props.items"
          :key="item.i18nLang"
          :value="item.i18nLang"
          @click="router.push(item.to)"
        >
          <!-- Language label -->
          <VListItemTitle>{{ item.label }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </IconBtn>
</template>
