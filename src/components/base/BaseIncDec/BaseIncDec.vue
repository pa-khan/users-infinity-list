<style src="./BaseIncDec.scss" />
<template>
    <div class="BaseIncDec">
        <div
            class="BaseIncDec__Button"
            @click="decrement"
        >
            -
        </div>
        <div class="BaseIncDec__Value">{{ value }}</div>
        <div
            class="BaseIncDec__Button"
            @click="increment"
        >
            +
        </div>
    </div>
</template>
<script setup lang="ts">
import {computed, ref, watch} from 'vue'

const props = defineProps({
    min: {
        type: Number,
        default: 1
    },
    max: {
        type: Number,
        default: 1
    },
    step: {
        type: Number,
        default: 1
    },
    modelValue: {
        type: Number,
        required: true
    }
})

const emits = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)

const canDecrement = computed(() => {
    return value.value - props.step > props.min
})

const canIncrement = computed(() => {
    return value.value + props.step < props.min
})

function setValue(val: number) {
    value.value = val

    emits('update:modelValue', value.value)
}

function decrement() {
    if (!canDecrement) return

    setValue(value.value - props.step)
}

function increment() {
    if (!canIncrement) return

    setValue(value.value + props.step)
}


watch(
    () => props.modelValue,
    () => {
        if (value.value != props.modelValue) {
            value.value = props.modelValue
        }
    }
)
</script>