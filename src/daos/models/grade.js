import { Schema, model } from "mongoose";

const GradeSchema = new Schema(
  {
    enrollment: {
      type: Schema.Types.ObjectId,
      ref: "Enrollment",
      required: true,
    },
    value: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    description: {
      type: string,
    },
  },
  { timestamps: true },
);

export const GradeModel = model("Grade", GradeSchema);
