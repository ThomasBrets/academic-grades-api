import { Schema, model } from "mongoose";

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
 description: {
    type: String,

  },
  email: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });


export const CourseModel = model("Course", CourseSchema)