<template>
    <BaseLoaderFilled
        v-if="state.isFirstLoading"
    />

    <ConfiguratorWrap/>
    <UsersList :users="users"/>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from 'vue';
import UsersList from '@/components/users/UsersList/UsersList.vue';
import useUsers from '@/composables/useUsers.ts';
import ConfiguratorWrap from '@/components/configurator/ConfiguratorWrap/ConfiguratorWrap.vue';
import BaseLoaderFilled from '@/components/base/BaseLoaderFilled/BaseLoaderFilled.vue';

const {getList} = useUsers()
const users = ref<users.User[]>([])
const meta = reactive<api.GetListParams>({
    results: 26,
    page: 1
})
const state = reactive({
    isLoading: false,
    isFirstLoading: true
})

async function loadUsers() {
    state.isLoading = true

    return getList(meta)
        .then(response => {
            users.value.push(...response.results)
        })
        .finally(() => {
            state.isLoading = false
        })
}

function additionalLoadingUsers() {
    meta.page++
    loadUsers()
}

function onDocumentScroll() {
    if (
        state.isLoading
        || (window.innerHeight + window.scrollY + 300) < document.body.offsetHeight
    ) return

    additionalLoadingUsers()
}

onMounted(() => {
    state.isFirstLoading = true
    loadUsers()
        .finally(() => {
            state.isFirstLoading = false
        })

    window.addEventListener('scroll', onDocumentScroll)
})
</script>
