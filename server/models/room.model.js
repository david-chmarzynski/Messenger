const mongoose = require('mongoose');
const schema = mongoose.Schema;

const roomModel = schema({
  namespace: { type: schema.Types.ObjectId, required: false },
  index: { type: Number, required: false },
  title: { type: String, required: true },
  users: { type: Array, required: true }
});

const Room = mongoose.model("rooms", roomModel);

module.exports = Room;