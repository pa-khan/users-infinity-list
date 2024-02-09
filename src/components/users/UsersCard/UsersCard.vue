<style src="./UsersCard.scss"/>
<template>
    <div class="UsersCard">
        <div class="UsersCard__Avatar">
            <img
                class="UsersCard__Image"
                :src="user.picture.large"
                :alt="name"
            >
        </div>
        <div class="UsersCard__Data">
            <div class="UsersCard__Name">
                {{ name }}
            </div>
            <UserData
                icon="at"
            >
                <a :href="`mailto:${user.email}`">{{ user.email }}</a>
            </UserData>
        </div>
    </div>
</template>
<script setup lang="ts">
import {computed, PropType} from 'vue'
import UserData from '@/components/users/UserData/UserData.vue'

const props = defineProps({
    user: {
        type: Object as PropType<users.User>,
        required: true
    }
})

const name = computed(() => {
    return Object.values(props.user!.name).join(' ')
})
</script>