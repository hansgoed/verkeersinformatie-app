import Vue from 'vue';
import Vuex from 'vuex'

import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';

import roads from './modules/roads'
Vue.use(BootstrapVue);
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    roads
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
