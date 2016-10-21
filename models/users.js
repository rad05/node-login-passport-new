var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    pass: String,
    country: String,
    creationDate: {type: Date, default: Date.now()},
    lastModificationDate: {type: Date, default: Date.now()},
    status:Number
})




/*
 var adminUsers = mongoose.model('adminUsers',adminSchema,"adminUsers");

 exports.adminUsers = adminUsers;
 */

userSchema.plugin(passportLocalMongoose);
var users = mongoose.model('users', userSchema)
exports.users=users
//module.exports = mongoose.model('account', accountSchema,'account');

