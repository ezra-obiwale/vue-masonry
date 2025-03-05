import masonry from './src/masonry';
export { default as Masonry } from './src/V3/Masonry.vue';

export default {
  install: function(Vue) {
    if (Vue.masonry_installed) {
      return;
    }
    Vue.masonry_installed = true;

    Vue.component('masonry', masonry);
  }
};
