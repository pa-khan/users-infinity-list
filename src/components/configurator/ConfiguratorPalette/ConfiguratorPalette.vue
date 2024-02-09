<style src="./ConfiguratorPalette.scss" />
<template>
    <div
        class="ConfiguratorPalette"
    >
        <div class="ConfiguratorPalette__Colors">
            <div
                v-for="(color, colorIndex) in palette"
                :key="colorIndex"
                class="ConfiguratorPalette__Color"
                :style="{'backgroundColor': color}"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import {PropType} from 'vue'

defineProps({
    palette: {
        type: Object as PropType<configuration.Palette[]>,
        required: true
    },
})
</script>