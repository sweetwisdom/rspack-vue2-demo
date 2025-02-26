import './index.css';
import Vue from 'vue';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
import Contextmenu from 'vue-contextmenujs';
Vue.use(Contextmenu);
Vue.use(Element, { size: 'small', zIndex: 3000 });
new Vue({
  el: '#root',
  render: (h) => h(App),
});
