import {createApp} from 'vue'
import App from '@/App.vue'
import '@/assets/styles/main.scss'
import clickOutsideDirective from '@/directives/clickOutsideDirective.ts'

const app = createApp(App)

app
    .directive('click-outside', clickOutsideDirective)
    .mount('#app')
