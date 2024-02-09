import {Ref, ref} from 'vue';

let instance: Ref<ConfigurationStore> | null = null

/**
 * Класс для взаимодействия компонентов конфугурации и конфигураторов
 */
class ConfigurationStore {
    isShow = false
    fonts = ['Montserrat', 'Roboto', 'Lato', 'Poppins', 'Inter', 'Oswald', 'Raleway', 'Kanit']

    palettes: configuration.Palette[] = [
        ['#03045e', '#0077b6', '#00b4d8', '#90e0ef', '#caf0f8'],
        ['#6c584c', '#a98467', '#adc178', '#dde5b6', '#f0ead2'],
        ['#231942', '#5e548e', '#9f86c0', '#be95c4', '#e0b1cb'],
        ['#2c0703', '#890620', '#b6465f', '#da9f93', '#ebd4cb'],
    ]

    /**
     * Конфигурации для всего интерфейса
     */
    ui: configuration.Ui = {
        font: 'Montserrat',
        size: 14,
        colors: ['', '', '', '', '']
    }

    /**
     * Конфигурации для списка и элеметна пользователй
     */
    users = {
        gap: 2,
        count: 3,
        padding: 1,
        elementPadding: 1,
        elementRadius: 1,
    }

    constructor() {
        this.ui.colors = this.palettes[0]
    }

    toggleShow() {
        this.isShow = !this.isShow
    }
}

/**
 * Singleton для реализации хранилища
 */
function useConfigurationStore() {
    if (!instance) instance = ref(new ConfigurationStore())
    return instance.value
}


export default useConfigurationStore