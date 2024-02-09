<style src="./ConfiguratorPalettes.scss"/>
<template>
    <div
        v-click-outside="hide"
        class="ConfiguratorPalettes"
        :class="{'--show': isShow}"
        :style="{
            '--offset-top': currentIndex
        }"
        @click="toggleShow"
    >
        <div class="ConfiguratorPalettes__Current">
            <ConfiguratorPalette
                :palette="configurationStore.ui.colors"
            />
        </div>
        <div class="ConfiguratorPalettes__Drop">
            <ConfiguratorPalette
                v-for="(palette, paletteIndex) in configurationStore.palettes"
                :key="paletteIndex"
                :palette="palette"
                @click="configurationStore.ui.colors = palette"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import {computed, ref} from 'vue'
import useConfigurationStore from '@/stores/configurationStore.ts'
import ConfiguratorPalette from '@/components/configurator/ConfiguratorPalette/ConfiguratorPalette.vue'

const configurationStore = useConfigurationStore()

const isShow = ref(false)

const currentIndex = computed(()=>{
    return configurationStore.palettes.findIndex((palette) => palette === configurationStore.ui.colors)
})

function toggleShow() {
    !isShow.value ? show() : hide()
}

function show() {
    isShow.value = true
}

function hide() {
    isShow.value = false
}
</script>