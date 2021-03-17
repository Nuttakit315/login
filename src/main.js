import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import firebase from 'firebase/app'
import "firebase/firestore";
import 'firebase/auth';
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBsAz6ZKkeFvj-26vU9aeVfLLDcreLDZAg",
    authDomain: "miniproject-dbff8.firebaseapp.com",
    projectId: "miniproject-dbff8",
    storageBucket: "miniproject-dbff8.appspot.com",
    messagingSenderId: "414636520629",
    appId: "1:414636520629:web:b714303693bfc36e27fafc"
  };
  firebase.initializeApp(firebaseConfig)
}
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
