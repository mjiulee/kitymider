import VueKityminder from './components/VueKityminder.vue';

export default {
  install: app => {
    app.component(VueKityminder.name, VueKityminder);
  }
};
