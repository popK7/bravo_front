<script setup>
import list from "@/pages/components/bravo/expansion.vue"
import addResource from "@/pages/components/bravo/btnPageAdd.vue"
import addForm from "@/views/workflows/forms/add.vue"
import selectPosition from "@/views/workflows/forms/select.vue"

const isDrawerVisible = ref(false) 

const showDrawer = function() {
  isDrawerVisible.value = true;
};
</script>

<template>
<div>
    <VCard class="mb-5">
        <template #title>
            <add-resource title="Mes workflows" @on-click="showDrawer"/>
        </template>
    </VCard>
    <!-- timesheet list -->
    <VCard class="mb-5">
      <VCardText>
        <VRow>
         <VCol cols="4">
          <add-form />
         </VCol>
         <VCol cols="8">
          <VRow>
            <VCol cols="12">
              <div>
                <select-position />
              </div>
            </VCol>
            <VCol cols="12">
              <list />
            </VCol>
          </VRow>
         
         </VCol>

       </VRow>
      </VCardText>

    </VCard>
</div>
</template>



