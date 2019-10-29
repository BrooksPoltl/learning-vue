import Vue from 'vue';
import App from './App.vue';
import vueResource from 'vue-resource';

Vue.use(vueResource);

Vue.http.options.root = "https://http-demo-d4999.firebaseio.com/"
new Vue({
  el: '#app',
  render: h => h(App)
})
