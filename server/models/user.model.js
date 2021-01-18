const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  isOnline: { type: Boolean, required: true },
  isAuthenticated: { type: Boolean, required: true },
  socket_id: { type: String, required: true}
});

// HASH PASSWORD
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hash(password, 12);
};

// COMPARE PASSWORDS
userSchema.methods.comparePasswords = (password, userPassword) => {
  return bcrypt.compare(password, userPassword);
};

const User = mongoose.model('users', userSchema);

module.exports = User;