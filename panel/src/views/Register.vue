<template>
  <div class="content">
    <h4>Create an Account</h4>
  <q-input filled v-model="email" label="Email" autofocus true type="email" class="col-6"
    placeholder="sample@gmail.com" />
  <q-input filled v-model="password" label="Password" true type="password" class="col-6" />
  <div class="row justify-center q-mt-md">
    <q-btn label="Register" type="submit" color="primary" @click="register" />
  </div>
  <q-banner v-if="errorMessage" inline-actions class="text-white bg-red">
    {{ errorMessage }}
  </q-banner>
  </div>

</template>



<script setup>
import { ref } from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import router from "../router";

const email = ref("")
const password = ref("")
const errorMessage = ref("")

const register = async() => {
  try {
    const authPromise = await createUserWithEmailAndPassword(getAuth(), email.value, password.value)  
    console.log("successfully registered: ", authPromise);
    router.push('/random-recipe')
  } catch (error) {
    console.log(error.code);
    switch (error.code) {
      case "auth/invalid-email":
      errorMessage.value = "Invalid email"
      case "auth/weak-password":
      errorMessage.value = "Weak password, passwords should be at least 6 charachers long"
        
    
      default:
        break;
    }
}
}


</script>