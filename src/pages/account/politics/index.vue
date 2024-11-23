<script setup>
import editor from "@/views/components/Editor.vue"

const isDrawerVisible = ref(false)

const showDrawer = function() {
  isDrawerVisible.value = true;
};

const currentTab = ref('window1');
</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <h4>Politiques & Régléments</h4>
        </template>
        
    </VCard>

    <VRow>
      <VCol cols="2" class="mt-11">
        <VTabs
          v-model="currentTab"
          class="v-tabs-pill"
          direction="vertical"
          >
          <VTab>Politiques</VTab>
          <VTab>Régléments</VTab>
        </VTabs>
      </VCol>
      <VCol cols="10">
        <VWindow v-model="currentTab">
            <VWindowItem key="window1">
              <editor />
            </VWindowItem>

            <VWindowItem key="window1">
              <editor />
            </VWindowItem>
        </VWindow>
      </VCol>

    </VRow>
</div>
</template>




