// import * as dotenv from 'dotenv'
// dotenv.config()
import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from 'quasar';

import App from "./App.vue";
import router from "./router";

import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.css';

import { VueQueryPlugin } from 'vue-query';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU6WZLBH3cUEoCGqVSPE_5TWPeTJvigR4",
  authDomain: "what-to-eat-4ed33.firebaseapp.com",
  projectId: "what-to-eat-4ed33",
  storageBucket: "what-to-eat-4ed33.appspot.com",
  messagingSenderId: "413829919165",
  appId: "1:413829919165:web:e000b319cb604310c2a2d4",
  measurementId: "G-EZKKQ52D72"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.use(Quasar, {
  plugins: {},
});
app.mount("#app");
