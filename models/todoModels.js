require('dotenv').config();
const mongoose = require('mongoose').connect(process.env.MONGODB_URL);
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    activity: String,
    due: {
      type: Date,
      default: null
    },
    status: String,
    tags: [String],
    userId: Schema.Types.ObjectId
  })

const Todo = mongoose.model('Todo', todoSchema)
  
module.exports = Todo