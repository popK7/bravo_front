<script setup>
const props = defineProps({
  modules: {
    type: Array,
    required: false,
    default: () => (
      [{
        id: '***',
        name: '***',
        description: '***',
        sub_modules: [{
          id: '***',
          name: '***',
          to: '***',
          icon: 'tabler-lock-open',
        }],
      }]
    ),
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'submit',
  'update:isDialogVisible',
])

const router = useRouter()
</script>

<template>
  <VCol
    v-for="item in props.modules"
    :key="item.id"
    md="4"
    lg="4"
    cols="12"
  >
    <VCard>
      <VRow no-gutters>
        <VCol
          cols="12"
          order="2"
          order-lg="1"
        >
          <VCardItem>
            <VCardTitle>{{ item.name }}</VCardTitle>
          </VCardItem>

          <VCardText>
            {{ item.description }}
          </VCardText>

          <VCardText>
            <VDivider />
          </VCardText>

          <VCardText class="#">
            <div class="me-auto pe-4 d-flex">
              <p
                v-for="sub_module in item.sub_modules"
                :key="sub_module.id"
                class="d-flex align-center mr-2"
              >
                <VIcon
                  color="primary"
                  :icon="sub_module.icon"
                  size="22"
                />
                <RouterLink :to="{ path: sub_module.to }">
                  {{ sub_module.name }}
                </RouterLink>
              </p>
            </div>
          </VCardText>
        </VCol>
      </VRow>
    </VCard>
  </VCol>
</template>
