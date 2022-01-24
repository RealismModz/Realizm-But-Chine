const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	userId: {type: String,required: true,lowercase: true,},
	xp: {type: Number,default: 0,lowercase: true},
	level: {type: Number,default: 0,lowercase: true},
	balance: {type: Number,default: 0,lowercase: true},
	bank: {type: Number,default: 0,lowercase: true}
});

module.exports = mongoose.model('users', userSchema);