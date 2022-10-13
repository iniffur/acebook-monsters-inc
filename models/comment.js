const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  name: String,
  message: String,
  createdAt: Date,
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;