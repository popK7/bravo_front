<script setup>
const emit = defineEmits([
    'onAttendanceView',
])

const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: () => []
    }
})

const details = function (year, month, day) {
    let data = {
        'year': year,
        'month': month,
        'day': day,
        'type': "attendance"
    }

    emit('onAttendanceView', data)
}
console.log(props.items);

const indice = 3
</script> 
 
<template>
<VList nav :lines="false" v-if="props.items.length > 0">
    <VListItem class="list-time" v-for="(item, index) in props.items" :key="item.value" :value="item.value">

        <VListItemTitle>
            <div class="track-timer">
                <p class="time-description display-4 ml-5" @click="details(item.year, item.month, item.day)">
                    <p href="#" class="text-bold">
                        {{ item.day }}</p>
                    <span>{{ item.name }}</span>
                </p>
                <div class="time-button">
                    <VBtn>
                        <VIcon icon="tabler-plus" />
                        Temps
                    </VBtn>
                </div>
            </div>
        </VListItemTitle>
    </VListItem>

</VList>
<VCard v-else class="is_loading_spinner">
    <VProgressCircular :size="30" width="3" color="primary" indeterminate class="progress_class" />
</VCard>
</template>

<style>
.list-time {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 2% 0%
}

.text-bold {
    font-weight: 900;
}

.track-timer {
    display: flex;
    justify-content: space-between;
}
</style>
