import CountrySelector from './CountrySelector.vue';

module.exports = {
  install: function(Vue, options) {
    Vue.component('country-selector', CountrySelector);
  }
};
