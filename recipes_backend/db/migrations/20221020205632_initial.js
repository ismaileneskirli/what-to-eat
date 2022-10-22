/**
 * // created with npx knex migrate:make initial
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 ;
 const tableNames = require('../../src/constants/tableNames');
 // what should happen when we create db
 exports.up = async function(knex) {
     await knex.schema.createTable(tableNames.recipes, (table) =>{
     // creates id as primary key that increments
     table.increments().notNullable();
     table.specificType('ingredients', 'TEXT[]').notNullable()
     table.specificType('amounts', 'TEXT[]').notNullable()
     table.string('name').notNullable()
     table.string('description',2000)
     table.specificType('instructions', 'TEXT[]')
     table.specificType('categories', 'TEXT[]')
     table.integer('prep_time').defaultTo(0)
     table.integer('cook_time').defaultTo(0)
     table.integer('wait_time').defaultTo(0)
     table.integer('servings')
     table.integer('calories')
     table.integer('fat')
     table.integer('carbs')
     table.integer('fiber')
     table.integer('sugar')
     table.integer('protein')
     table.string('img_url', 2000)
     table.string('video_url', 2000)
     table.string('website_url', 2000)
   })
 };
 
 /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
 // drop all tables
 exports.down = async function(knex) {
   await knex.schema.dropTable(tableNames.recipes)
 };
 