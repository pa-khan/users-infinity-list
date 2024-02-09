<style src="./ConfiguratorSection.scss" />
<template>
    <div
        class="ConfiguratorSection"
        :class="{'--show': configurationStore.isShow}"
    >
        <ConfiguratorSetting icon="arrows-out">
            <BaseRange
                v-model="configurationStore.users.padding"
                :min="0"
                :max="4"
                :step="0.1"
            />
        </ConfiguratorSetting>

        <ConfiguratorSetting icon="arrows-in">
            <BaseRange
                v-model="configurationStore.users.elementPadding"
                :min="0"
                :max="4"
                :step="0.1"
            />
        </ConfiguratorSetting>


        <ConfiguratorSetting icon="corners-out">
            <BaseRange
                v-model="configurationStore.users.elementRadius"
                :min="0"
                :max="10"
                :step="0.1"
            />
        </ConfiguratorSetting>

        <ConfiguratorSetting icon="columns">
            <BaseRange
                v-model="configurationStore.users.count"
                :min="2"
                :max="4"
            />
        </ConfiguratorSetting>

        <ConfiguratorSetting icon="split-horizontal">
            <BaseRange
                v-model="configurationStore.users.gap"
                :min="0.5"
                :max="10"
                :step="0.1"
            />
        </ConfiguratorSetting>

        <ConfiguratorSetting icon="arrows-out-simple">
            <BaseRange
                v-model="configurationStore.ui.size"
                :min="8"
                :max="20"
                :step="0.1"
            />
        </ConfiguratorSetting>
        <ConfiguratorSetting icon="text-t">
            <BaseSelect
                v-model="configurationStore.ui.font"
                :options="configurationStore.fonts"
            />
        </ConfiguratorSetting>
        <ConfiguratorPalettes/>

        <BaseButton
            class="ConfiguratorSection__Close"
            @click="configurationStore.toggleShow()"
        >
            <BaseIcon name="x" />
        </BaseButton>
    </div>
</template>
<script setup lang="ts">
import BaseRange from '@/components/base/BaseRange/BaseRange.vue'
import ConfiguratorPalettes from '@/components/configurator/ConfiguratorPalettes/ConfiguratorPalettes.vue'
import BaseSelect from '@/components/base/BaseSelect/BaseSelect.vue'
import ConfiguratorSetting from '@/components/configurator/ConfiguratorSetting/ConfiguratorSetting.vue'
import useConfigurationStore from '@/stores/configurationStore.ts'
import BaseButton from '@/components/base/BaseButton/BaseButton.vue'
import BaseIcon from '@/components/base/BaseIcon/BaseIcon.vue'

const configurationStore = useConfigurationStore()
</script>