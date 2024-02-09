<style src="./ConfiguratorButton.scss" />
<template>
    <BaseButton
        class="ConfiguratorButton"
        :class="{'--hidden': configurationStore.isShow}"
        @click="configurationStore.toggleShow()"
    >
        <BaseIcon name="paint-brush" />
    </BaseButton>
</template>
<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton/BaseButton.vue';
import BaseIcon from '@/components/base/BaseIcon/BaseIcon.vue';
import useConfigurationStore from '@/stores/configurationStore.ts';

const configurationStore = useConfigurationStore()
</script>