const mongoose = require("mongoose");
const schema = mongoose.Schema;

const messageSchema = schema(
  {
    type: { type: String, enum: ["text", "image", "file"], default: "text" },
    data: { type: String },
    author: { type: schema.Types.ObjectId, ref: "users", required: true },
    authorName: { type: String, required: true },
    room: { type: schema.Types.ObjectId, ref: "rooms", required: true },
  },
  { timestamps: true }
);

const Message = mongoose.model("messages", messageSchema);

module.exports = Message;