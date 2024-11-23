<script setup>
import {
    avatarText,
    kFormatter,
} from '@core/utils/formatters'
import { useRouter } from 'vue-router';

const resolveUserRoleVariant = role => {
    if (role === 'subscriber')
        return {
            color: 'warning',
            icon: 'tabler-user',
        }
    if (role === 'author')
        return {
            color: 'success',
            icon: 'tabler-circle-check',
        }
    if (role === 'maintainer')
        return {
            color: 'primary',
            icon: 'tabler-chart-pie-2',
        }
    if (role === 'editor')
        return {
            color: 'info',
            icon: 'tabler-pencil',
        }
    if (role === 'admin')
        return {
            color: 'secondary',
            icon: 'tabler-server-2',
        }

    return {
        color: 'primary',
        icon: 'tabler-user',
    }
};

const resolveUserStatusVariant = stat => {
    if (stat === 'pending')
        return 'warning'
    if (stat === 'active')
        return 'success'
    if (stat === 'inactive')
        return 'secondary'

    return 'primary'
}

const router = useRouter();

const props = defineProps({
    userData: {
        type: Object,
        required: true,
        default: () => {}
    },
});
</script>

<template>
<VCard>
    <VCardText class="pt-6 d-flex" :style="{'justify-content': 'space-between'}">

        <div class="d-flex" :style="{'width': '11.5cm', 'justify-content': 'space-between'}">
            <!-- 👉 Avatar -->
            <VAvatar rounded :size="100" :color="!props.userData?.avatar ? 'primary' : undefined" :variant="!props.userData?.avatar ? 'tonal' : undefined">
                <VImg v-if="props.userData?.avatar" :src="props.userData?.avatar" />
                <span v-else class="text-5xl font-weight-medium">
                    {{ avatarText(props.userData?.fullName) }}
                </span>
            </VAvatar>

            <div class="***">
                <!-- 👉 User fullName -->
                <h6 class="text-h5 mt-1">
                   <b>{{ props.userData?.fullName }}</b> 
                </h6>

                <div class="d-flex mt-4">
                    <span class="mr-3">
                        <VIcon icon="tabler-map-pin-share" color="primary" />
                        <span>{{ props.userData?.country }}</span>
                    </span>
                    <span class="mr-1">
                        <VIcon icon="tabler-user" color="primary" />
                        <span>{{ props.userData?.role }}</span>
                    </span>
                </div>

                <div class="d-flex mt-2">
                    <span class="mr-4">
                        <VIcon icon="tabler-phone" color="primary" />
                        <span>{{ props.userData?.contact }}</span>
                    </span>
                    <span class="mr-1">
                        <VIcon icon="tabler-mail" color="primary" />
                        <span> {{ props.userData?.email }}</span>
                    </span>
                </div>

            </div>

        </div>

        <div>

          <div class="d-flex cursor-pointer" @click="router.push('/')">
            <VIcon 
              icon="tabler-home"
            />
            <h4 class="mt-0">Tableau de bord</h4>
          </div>
        </div>

    </VCardText>

</VCard>
</template>
