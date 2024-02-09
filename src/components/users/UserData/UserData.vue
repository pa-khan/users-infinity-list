<style src="./UserData.scss"/>
<template>
    <div class="UserData">
        <BaseIcon
            class="UserData__Icon"
            :name="icon"
        />
        <span
            class="UserData__Text"
        >
            <slot />
        </span>
    </div>
</template>
<script setup lang="ts">
import {PropType} from 'vue';
import BaseIcon from '@/components/base/BaseIcon/BaseIcon.vue'

defineProps({
    icon: {
        type: String as PropType<Icons>,
        required: true
    },
})
</script>