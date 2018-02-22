const assert = require('assert');
const mongoose = require('mongoose');
const DB_NAME = 'starter-kit-express';
const MONGO_URI = `mongodb://localhost/${DB_NAME}`;
const Category = require('../models/category');
const Doubt = require('../models/doubt');

const categories = [
  { "name": "FAQ" },
  { "name": "Basic" },
  { "name": "Technical" },
  { "name": "Geeky" },
  { "name": "Personal" }
]

const doubts = [
  {
    "title": "I would like to download the project, what should I do?",
    "description": "Hi, I am new to express, node and all this stuff. I would like to deep learn the concepts and this bootstrap looks simply amazing. Where can I find the open source repo?",
    "category": "FAQ"
  },
  {
    "title": "Where do all these questions come from?",
    "description": "I wonder where is all this data stored. I can not find the SQL Database anywhere. Is this project using some other technology?",
    "category": "Basic"
  },
]

// This script asumes that you have an empty database. Otherwise it may fail.
mongoose.Promise = Promise;
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`Connected to ${DB_NAME} database.`);

        console.log('About to insert Categories...')
        Category.collection.insertMany(categories, (errorCategories, resultCategories) => {
          assert.equal(null, errorCategories);
          assert.equal(5, resultCategories.insertedCount);
          console.log('5 Categories inserted successfully');

          console.log('About to insert doubts...');
          Doubt.collection.insertMany(doubts, (errorDoubts, resultDoubts) => {
            assert.equal(null, errorDoubts);
            assert.equal(2, resultDoubts.insertedCount);
            console.log('2 Doubts inserted successfully');

            console.log('Closing conection...');
            mongoose.connection.close();
          });
        });
    }).catch((error) => {
        console.error(`Database connection error: ${error}`);
    });
