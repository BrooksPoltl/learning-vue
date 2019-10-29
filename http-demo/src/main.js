import Vue from 'vue';
import App from './App.vue';
import vueResource from 'vue-resource';

Vue.use(vueResource);

Vue.http.options.root = "https://http-demo-d4999.firebaseio.com/";
Vue.http.interceptors.push((req, next)=>{
  console.log(req);
  if(req.method == "POST"){
    req.method = "PUT";
  }
  next(res => {
    res.json = () => { return {messages: res.body } }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
