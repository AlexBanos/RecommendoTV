import { createApp } from 'vue';
import { createPinia } from 'pinia';
import "./assets/base.css"

import App from './app/App.vue';
import router from './app/router';
import { useTheme } from './shared/composables/useTheme';

const {initTheme} = useTheme();
initTheme();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
