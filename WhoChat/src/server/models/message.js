const mongoose = require('mongoose'),  
Schema = mongoose.Schema;

const MessageSchema = new Schema({
    nickname: {
        type: String,
        lowercase: true,
        required: true,
        unique: false

      },
      message: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
      },
      numComments: {
        type: Number,
        unique: false
      },
      upvotes: {
        type: Number,
        unique: false
      },
      comments: {
        nickname: {
          type: String,
          lowercase: true,
          unique: false
        },
        message: {
          type: String,
          lowercase: true,
          unique: false
        }
      },
      tag: {
        type: String,
        lowercase: true,
        unique: false
      },
      created: { type: Date, default: Date.now, unique: false} 
    },
   
      {
        timestamps: true
      }
);

module.exports = mongoose.model('Messages', MessageSchema);  