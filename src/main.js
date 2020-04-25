import Vue from 'vue';
import Vuex from 'vuex'

import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(Vuex);

import VueMoment from 'vue-moment';
const moment = require('moment');
require('moment/locale/nl');

Vue.use(VueMoment, {
  moment
});

import roads from './modules/roads'
import trafficJams from "./modules/trafficJams";

export const store = new Vuex.Store({
  modules: {
    roads,
    trafficJams
  },
  state: {
      error: null
  },
  mutations: {
    throwError (state, error) {
        state.error = error
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
