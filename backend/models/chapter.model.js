import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    order: { type: Number, required: true },
    content: [
      {
        type: {
          type: String,
          enum: ["lecture", "video", "quiz"],
          required: true,
        },
        data: [String],
      },
    ],
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Chapter", ChapterSchema);
