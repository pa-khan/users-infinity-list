<style src="./ConfiguratorSetting.scss"/>
<template>
    <div class="ConfiguratorSetting">
        <BaseIcon
            class="ConfiguratorSetting__Icon"
            :name="icon"
        />
        <div class="ConfiguratorSetting__Wrap">
            <slot />
        </div>
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