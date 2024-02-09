<style src="./UsersList.scss" />
<template>
    <div
        class="UsersList"
        :style="style"
    >
        <UsersCard
            v-for="user in users"
            :key="user.id.value"
            :user="user"
        />
    </div>
</template>
<script setup lang="ts">
import {computed, PropType} from 'vue';
import UsersCard from '@/components/users/UsersCard/UsersCard.vue';
import useConfigurationStore from '@/stores/configurationStore.ts';

defineProps({
    users: {
        type: Object as PropType<users.User[]>,
        required: true
    }
})

const configurationStore = useConfigurationStore()
const style = computed(() => {
    return `
        --gap: ${configurationStore.users.gap}em;
        --count: ${configurationStore.users.count};
        --padding: ${configurationStore.users.padding}em;
        --element-padding: ${configurationStore.users.elementPadding}em;
        --element-radius: ${configurationStore.users.elementRadius}em;
    `
})
</script>