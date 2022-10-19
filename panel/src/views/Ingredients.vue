<template>
  <div class="row justify-center q-mt-md">
    <q-input filled v-model="item" label="Filled" autofocus true type="text" class="col-6"
      placeholder="What do you have in the kitchen" />
    <q-btn label="Submit" type="submit" color="primary" @click="addItemToTheList" />
  </div>
  <q-list class="q-mx-xl">
    <div class="row justify-center" v-for="(item, index) in items">
      <q-item class="col-6">
        <q-item-section>
          <q-item-label>{{item.name}}</q-item-label>
          <!-- <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label> -->
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{new Date(item.date).toLocaleString()}}</q-item-label>
          <q-checkbox v-model="item.isConsumed" label="Consumed" color="teal" @click="removeItemFromList(index)" />
        </q-item-section>
      </q-item>
    </div>
    <!-- <q-separator spaced inset style="max-width: 50rem" /> -->
  </q-list>

</template>

<script setup>
import { ref } from "vue";
import {useUserStore} from "../stores/user"
import {useQuery, useMutation, useQueryClient} from "vue-query"
import {getUserData, updateUser} from "../lib/user.api"

let item = ref("")
let items = ref([])
const userStore = useUserStore();
const queryClient = useQueryClient();

const userId = userStore.getUserId

const {isLoading, error, mutateAsync} = useMutation(updateUser, {
  onSuccess(){
    queryClient.invalidateQueries('getUserData')
  }
})


const addItemToTheList =async () => {
  // console.log("userId: ", userId);
  // items.value.push({ name: item.value, date: Date.now(), isConsumed: false })
  // item.value = ""
  if(item.value.trim()){
   const res =  await mutateAsync({
      user_id: userId,
      name: item.value,
      date: Date.now(),
      is_consumed: false
    })
    console.log(res);
    item.value = ''
  }
}

const removeItemFromList = (index) => {
  console.log(index);
  items.value.splice(index, 1)
}

// function sortFunction (){

// }

// const {isFetching, error,data } = useQuery( 'getUserData', getUserData, {select(usersIngredients){
//   return 
// }})
</script>