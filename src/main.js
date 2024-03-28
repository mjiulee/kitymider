import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import { reactive } from 'vue';
import mitt from "mitt";

reactive({
    size: 'small',
});
import i18n from './locales/index'
import VueKityminder from './kmindex.js';

let app = createApp(App);
app.config.globalProperties.getEnv = import.meta.env;
app.config.globalProperties.$bus = new mitt();
app.config.globalProperties.$appinfo = {};

Object.keys(ElementPlusIconsVue).forEach(key => {
    app.component(key, ElementPlusIconsVue[key]);
});

app.use(i18n).use(ElementPlus, {
    locale: zhCn,
}).use(VueKityminder).use(router).mount('#app');
