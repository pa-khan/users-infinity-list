<template>
    <component
        :is="'style'"
        v-html="sizes"
    />
    <component
        :is="'style'"
        v-html="fonts"
    />
    <component
        :is="'style'"
        v-html="colors"
    />
</template>
<script setup lang="ts">
import {computed} from 'vue'
import useConfigurationStore from '@/stores/configurationStore.ts'

const configurationStore = useConfigurationStore()
const colors = computed(() => {
    if (!configurationStore.ui.colors) return ''

    const variables: string[] = []
    const classes: string[] = []

    configurationStore.ui.colors.forEach((value, index) => {
        const signature = `color-${index + 1}`
        variables.push(`--${signature}:${value}`)
        classes.push(`.${signature} { color: ${value} }`)
    })

    return `:root{${variables.join(';')}}${classes.join('')}`
})

const sizes = computed(() => {
    return `
        :root {
            --size-primary: ${configurationStore.ui.size}px;
        }
    `
})

const fonts = computed(() => {
    return `
        @import url('https://fonts.googleapis.com/css2?family=${configurationStore.ui.font}:wght@300;400&display=swap');
        :root {
            --font-primary: "${configurationStore.ui.font}";
        }
    `
})
</script>