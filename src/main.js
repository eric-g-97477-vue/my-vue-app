import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'the-new-css-reset/css/reset.css'

window.CESIUM_BASE_URL = '/static/Cesium2/';

createApp(App).mount('#app')
