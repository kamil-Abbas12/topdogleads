import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  slug: String,
  name: String,
  email: String,
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
