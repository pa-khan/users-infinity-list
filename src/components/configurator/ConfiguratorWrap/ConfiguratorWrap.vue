<style src="./ConfiguratorWrap.scss" />
<template>
    <div class="ConfiguratorWrap">
        <ConfiguratorStyles />
        <ConfiguratorButton />
        <ConfiguratorSection />
    </div>
</template>
<script setup lang="ts">
import ConfiguratorStyles from '@/components/configurator/ConfiguratorStyles/ConfiguratorStyles.vue';
import ConfiguratorButton from '@/components/configurator/ConfiguratorButton/ConfiguratorButton.vue';
import ConfiguratorSection from '@/components/configurator/ConfiguratorSection/ConfiguratorSection.vue';
</script>