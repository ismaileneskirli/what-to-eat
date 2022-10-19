<template>
  <div class="content">
    <q-card class="my-card">
      <div class="q-pa-md q-gutter-md">
        <q-img v-if="randomRecipeImgUrl !== null" :src="randomRecipeImgUrl" :ratio="1" class="q-mt-md"
          style="width: 400px"
        />
      </div>


      <div class="row justify-around items-center" v-if="randomRecipeName">
        <div class="text-h6"> {{randomRecipeName}}</div>
        <q-card-actions align="right">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="teal" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </div>


      <q-card-actions vertical align="center">
        <q-checkbox  label="Use my fridge" color="teal"  v-model="isFridgeUsed"/>
        <q-btn class="glossy" rounded color="green" label="I'm feeling lucky" v-on:click="getRandomRecipe" />
      </q-card-actions>

    </q-card>

  </div>
</template>

<script setup>
import { ref} from 'vue'
import recipes from '../json/recipes.json'
let randomRecipeName = ref("")
let randomRecipeImgUrl = ref("https://goodcheapeats.com/wp-content/uploads/2022/01/What-to-Make-Pin-250x250.jpg")
let isFridgeUsed = ref(Boolean)

const randomProperty = function () {
  var keys = Object.keys(recipes);
  return recipes[keys[keys.length * Math.random() << 0]];
};

const getRandomRecipe = () => {
  // todo: check is fridge used and get recipes accordingly
  console.log("clicked")
  const randomMeal = randomProperty()
  randomRecipeName.value = randomMeal.name
  randomRecipeImgUrl.value = randomMeal.imgUrl
}
</script>
