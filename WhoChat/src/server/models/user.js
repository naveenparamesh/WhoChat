const mongoose = require('mongoose'),  
Schema = mongoose.Schema;

const UserSchema = new Schema({

    nickname: {
        type: String,
        lowercase: true,
        required: true,
        unique: true

      },
      messages_voted_on: {
        type: [String],
        lowercase: true,
        unique: false
      }
});

// UserSchema.statics.justLoggedIn = function(name){
//     this.find({nickname: name, just_logged_on: true}).exec(function(err, record){
//         if (record.length == 0){
//             console.log("RETURNING FALSE!!");
//             return false;
//         }
//         else {
//             console.log("RETURNING TRUE!!");
//             return true;
//         }
//     });
// }

// UserSchema.statics.LoggedIn = function(name, value){
//     this.update({nickname: name}, {$set: {just_logged_on: value}}).exec(function(err, record){
//         return;
//     });
// }

module.exports = mongoose.model('Users', UserSchema);  