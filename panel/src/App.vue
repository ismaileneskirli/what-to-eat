<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useQuasar } from 'quasar';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { onMounted, ref } from "vue";
import { useUserStore } from "./stores/user";


const $q = useQuasar();
const darkQuery = '(prefers-color-scheme: dark)';
const queryList = window.matchMedia(darkQuery);
$q.dark.set(queryList.matches)

// add listener for theme changes
queryList.addEventListener('change', (event) => {
  $q.dark.set(event.matches)
})
const rightDrawerOpen = ref(false)

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const isLoggedIn = ref(false)
const router = useRouter()
let auth;
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    }
    else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  })
}

const userStore = useUserStore()
// const userName = ref()


</script>


<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          WhatToEat
        </q-toolbar-title>

        <q-btn v-if="isLoggedIn" dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab v-if="isLoggedIn" :to="{ name: 'randomRecipe' }" label="I'm Feeling Lucky" />
        <q-route-tab v-if="isLoggedIn" :to="{ name: 'ingredients',  isLoggedIn: isLoggedIn}" label="My Ingredients" />
        <q-route-tab v-if="isLoggedIn" :to="{ name: 'buyList',  isLoggedIn: isLoggedIn}" label="Alışveriş Listesi" />
        <q-route-tab v-if="!isLoggedIn" to="/login" label="Login" />
        <q-route-tab v-if="!isLoggedIn" to="/register" label="Register" />
      </q-tabs>
    </q-header>

    <q-drawer v-if="rightDrawerOpen" v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->

      <q-scroll-area class="fit">
        <q-list>

          <q-item>
            <q-item-section>
              {{userStore.getUserName }}
            </q-item-section>
          </q-item>
          <q-separator />

          <q-item>
            <q-item-section>
              <q-btn v-if="isLoggedIn" color="white" text-color="black" label="Logout" @click="handleSignOut" />
            </q-item-section>
          </q-item>
          <q-separator />

        </q-list>
      </q-scroll-area>

    </q-drawer>

    <!-- <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                <q-btn  color="primary">
                  I'm Feeling Lucky
                </q-btn>
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer> -->

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<style>
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>