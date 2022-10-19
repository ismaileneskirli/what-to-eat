<template>
  <div class="content">
    <h4>Sign in to an Account</h4>
  <q-input filled v-model="email" label="Email" autofocus true type="email" class="col-6" placeholder="sample@gmail.com" />
  <q-input filled v-model="password" label="Password"  true type="password" class="col-6" />
  <q-banner v-if="signInErrorMessage" inline-actions class="text-white bg-red">
    {{ signInErrorMessage }}
  </q-banner>
  <div class="row justify-center">
    <q-btn class="q-mt-md" label="Login" type="submit" color="primary" @click="login" />
  </div>
<div class="row justify-center">
  <q-btn  class="q-mt-md"  label="Log in With Google" type="submit" color="secondary" @click="signInWithGoogle" />
  </div>
  </div>

</template>



<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import {useUserStore} from "../stores/user"
import router from "../router";

const email = ref("")
const password = ref("")
const signInErrorMessage = ref("")
const userStore = useUserStore()

const login = async () => {
  try {
    const authPromise = await signInWithEmailAndPassword(getAuth(), email.value, password.value)
    console.log("successfully registered: ", authPromise);
    router.push('/ingredients')
  } catch (error) {
    console.log(error.code);
    switch (error.code) {
      case "auth/invalid-email":
        signInErrorMessage.value = "Invalid Email"
      case "auth/user-not-found":
        signInErrorMessage.value = "No account with that email was found"
      case "auth/wrong-password":
        signInErrorMessage.value = "Incorrect Password"
      default:
        signInErrorMessage.value = "Email or password is incorrect"
        break;
    }
  }
}
 const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider).then((result) => {
    console.log(result.user)
    userStore.user = result.user
    //Todo: store user id for accessing its data 
    console.log(result.user.uid);
    router.push("/ingredients")
  })
  .catch((error) => {
console.log(error);
  })
 }
</script>