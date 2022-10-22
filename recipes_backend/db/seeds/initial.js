/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const tableNames = require('../../src/constants/tableNames');

exports.seed = async function (knex) {
  console.log('cleaning: ', tableNames.recipes);
  await knex(tableNames.recipes).del();
  const recipe1 = {
    name: 'Tavuk Haşlama',
    description: 'Lezzetli ve şifa deposu haşlama tavuk yemeği',
    instructions: [
      'Kızgın yağımızda soğanlarımızı kavuralım.',
      'Havuçlarımızı ve 1 yemek kaşığı unu da ekleyerek kavurmaya devam edelim',
      'Tavuklarımızı tencereye alalım.(Ben tavukların derisini aldım)Bu şekilde 15 dakika pişirelim.',
      'Daha sonra patatesleri, sarımsağı ve baharatları ilave ederek pişirmeye devam edelim.Afiyet olsun🍀.',
    ],
    categories: ['chicken', 'turkish', 'boiled'],
    img_url:
      'https://i.nefisyemektarifleri.com/2022/10/14/sifa-deposu-tavuk-haslama.jpg',
    ingredients: [
      'tavuk but',
      'havuç',
      'patates',
      'kuru soğan',
      'sarımsak',
      'un',
      'ayçiçek yağı',
      'tereyağ',
      'köri',
      'tuz',
      'karabiber',
    ],
    amounts: [
      '6-7 adet',
      '2 adet',
      '2 adet',
      '1 adet',
      '2 diş',
      '1 yemek kaşığı',
      'isteğe göre',
      'aldığı kadar',
    ],
  };
  const recipe2 = {
    name: 'Test',
    description: 'Test',
    instructions: [
      'Kızgın yağımızda soğanlarımızı kavuralım.',
      'Havuçlarımızı ve 1 yemek kaşığı unu da ekleyerek kavurmaya devam edelim',
      'Tavuklarımızı tencereye alalım.(Ben tavukların derisini aldım)Bu şekilde 15 dakika pişirelim.',
      'Daha sonra patatesleri, sarımsağı ve baharatları ilave ederek pişirmeye devam edelim.Afiyet olsun🍀.',
    ],
    categories: ['test'],
    img_url:
      'https://i.nefisyemektarifleri.com/2022/10/14/sifa-deposu-tavuk-haslama.jpg',
    ingredients: ['ekmek', 'su'],
    amounts: ['6-7 adet', '2 bardak'],
  };
  const recipes = [recipe1, recipe2];
  const [createdRecipe] = await knex(tableNames.recipes)
    .insert(recipes)
    // return what is inserted
    .returning('*');
  console.log('recipe created: ', createdRecipe);
};
