import { Schema, model } from "mongoose";

const EnrollmentSchema = new Schema(
  {
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

export const EnrollmentModel = model("Enrollment", EnrollmentSchema);
