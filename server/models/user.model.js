const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true , unique : true},
    password: { type: String, required: true }, // Use String for storing hashed passwords
    quote: { type: String },
  },
  { collection: 'user-data' } // Pass options here
);

const model = mongoose.model('UserData',User);
module.exports = model