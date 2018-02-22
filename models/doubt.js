const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const doubtSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
    required: [true, 'Question is required']
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }]
}, { timestamps: true });

const Doubt = mongoose.model('Doubt', doubtSchema);
module.exports = Doubt;
