import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import router from './router.js';
import App from './App.vue';

VueMarkdownEditor.use(vuepressTheme);

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(VueMarkdownEditor);
app.mount('#app');
