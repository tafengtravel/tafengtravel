import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

firebase.initializeApp({
  apiKey:"AIzaSyDYLp1AZezHuoCsdejK-OzHoE9QGn5FzJw",
  projectId: 'tafengtravel-7cf35',
  authDomain: "tafengtravel-7cf35.firebaseapp.com",
  databaseURL: "https://tafengtravel-7cf35.firebaseio.com/",
  storageBucket: "tafengtravel-7cf35.appspot.com",
}); 



let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
