<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const users = [{
        start_at: '28.09.2024',
        end_at: null,
        status: 'En vigueur',
        lastVisited: '13 minutes ago',
    },
    {
        start_at: '28.09.2024',
        end_at: '28.09.2024',
        status: 'Archive',
        lastVisited: '13 minutes ago',
    },
]

const resolveStatusColor = {
    'En vigueur': 'success',
    'Archive': 'warning',
    'Offline': 'secondary',
    'In Meeting': 'error',
};

const libelle = function (start, end) {

    return end ? `${start} - ${end}` : start;
}


</script>

<template>
<div>
   
    <VList lines="tree" border>
        <template v-for="(user, index) of users" :key="user.name">
            <VListItem>
                <VListItemTitle>
                    {{ libelle(user.start_at, user.end_at) }}
                </VListItemTitle>
                <VListItemSubtitle class="mt-1">
                    <VBadge dot location="start center" offset-x="2" :color="resolveStatusColor[user.status]" class="me-3">
                        <span class="ms-4">{{ user.status }}</span>
                    </VBadge>
                </VListItemSubtitle>

                <template #append>
                    <span>4000 Dollars Mansuel</span>
                </template>

            </VListItem>
            <VDivider v-if="index !== users.length - 1" />
        </template>
    </VList>
</div>
</template>

