// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

// Local Modules
import { LoggerUtil } from '../src/utils';

function up(pg) {
  return pg.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('adminname').notNullable();
      table.string('avc').notNullable();
      table.string('bank_account').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.string('address').notNullable();
      table.string('company_name').unique().notNullable();
      table.specificType('payment_method', 'jsonb[]');
      table.string('info');
      table.string('logo');
      table.string('role').defaultTo('admin');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('products', (table) => {
      table.increments('id').primary();
      table.integer('users_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE'); 
      table.string('companyName')
      table.string('flowerName');
      table.string('picture');
      table.integer('sale');
      table.string('size');
      table.string('categoryName');
      table.boolean('availability').defaultTo(true);
      table.integer('price');
      table.integer('sale_price');
      table.text('description');
      table.enum('product_status', ['bouquets', 'wreaths', 'gifts']).notNullable();
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('slides', (table) => {
      table.increments('id').primary();
      table.string('src').notNullable();
      table.string('alt').notNullable();
      table.string('link');
      table.string('text');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('footers', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.specificType('links', 'jsonb[]');
      table.string('link');
      table.text('icond');
      table.string('title');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('orders', (table) => {
      table.increments('id').primary();
      table.string('company_name').notNullable();
      table.string('receiver_name').notNullable();
      table.string('receiver_phone').notNullable();
      table.string('sender_name').notNullable();
      table.string('sender_phone').notNullable();
      table.string('sender_phone2');
      table.string('delivery_state').notNullable();
      table.string('delivery_city').notNullable();
      table.string('delivery_address').notNullable();
      table.string('delivery_year').notNullable();
      table.string('delivery_month').notNullable();
      table.string('delivery_day').notNullable();
      table.string('delivery_time').notNullable();
      table.text('delivery_text');
      table.integer('delivery_count').notNullable();
      table.string('picture').notNullable();
      table.string('size').notNullable();
      table.string('category_name').notNullable();
      table.integer('price').notNullable();
      table.string('flower_name').notNullable();
      table.enum('payment_status', ['cash', 'online']).notNullable();
      table.dateTime('created_at');
      table.dateTime('updated_at');
    });
}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await up(pg);
    console.log('Successfully created all tables ... ');
    process.kill(process.pid);
  } catch (error) {
    LoggerUtil.error(error.message);
  }
}

init();
