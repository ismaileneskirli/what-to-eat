<template>
  <q-form @submit.prevent="addItemToTheList">
    <div class="row justify-center q-mt-md">
      <q-input filled v-model="item" label="Filled" autofocus true type="text" class="col-6"
        placeholder="What do you have in the kitchen" />
      <q-btn label="Submit" type="submit" color="primary" />
    </div>
  </q-form>

  <q-banner v-if="userError" inline-actions class="text-white bg-red">
    {{ userError.response?.data?.message || userError.message }}
  </q-banner>
  <div v-if="data">
    <q-list class="q-mx-md">
      <div v-for="(item, index) in data">
        <q-item class="row justify-center">
          <q-item-section class="col-2">
            <q-item-label>{{item.name}}</q-item-label>
            <!-- <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label> -->
          </q-item-section>

          <q-item-section side top class="col-4">
            <q-item-label caption>{{new Date(item.date).toLocaleString()}}</q-item-label>
            <q-btn outline rounded label="Consumed" color="teal" @click="removeItemFromList(item)"
              style="font-size: 10px" />
          </q-item-section>
        </q-item>
      </div>
      <!-- <q-separator spaced inset style="max-width: 50rem" /> -->
    </q-list>
  </div>


</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user"
import { useMutation, useQueryClient } from "vue-query"
import { useUsersIngredients } from '../lib/queryHooks'
import { updateIngredientList } from "../lib/user.api"

let item = ref("")
let items = ref([])
const userStore = useUserStore();
const queryClient = useQueryClient();

const userId = userStore.getUserId

const { isLoading, error, mutateAsync } = useMutation(updateIngredientList, {
  onSuccess() {
    console.log("success invalidating");
    queryClient.invalidateQueries(['getUserData', userId])
  }
})

const { isFetching, userError, data } = useUsersIngredients(userId)

const addItemToTheList = async () => {
  if (item.value.trim()) {
    await mutateAsync({
      user_id: userId,
      type: "add",
      item: {
        name: item.value,
        date: Date.now(),
        is_consumed: false
      }
    })
    console.log("item value reset");
    item.value = ''
    console.log(item.value);
  }
}

const removeItemFromList = async (item) => {
  await mutateAsync({
    user_id: userId,
    type: "delete",
    item
  })
}

// function sortFunction (){

// }


</script>