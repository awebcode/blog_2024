import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    postcreatedAtDate: { type: Date }, // Modified to make it required
    caption: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    body: { type: Object, required: true },
    photo: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    tags: { type: [String] },
    categories: [{ type: Schema.Types.ObjectId, ref: "PostCategories" }],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

PostSchema.pre("save", function (next) {
  const year2015 = new Date("2015-01-01").getTime(); // Timestamp for 2015
  const year2018 = new Date("2018-12-31").getTime(); // Timestamp for 2023

  // Check if the document is new or being updated
  if (this.isNew) {
    // Generate a random timestamp between 2015 and 2023
    const randomTimestamp = year2015 + Math.random() * (year2018 - year2015);
    const randomDate = new Date(randomTimestamp);

    // Set postcreatedAtDate to the random date
    this.postcreatedAtDate = randomDate;
  }
  // For an updated document, the postcreatedAtDate remains the same (set during creation)
  next();
});

PostSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
});

const Post = model("Post", PostSchema);
export default Post;
