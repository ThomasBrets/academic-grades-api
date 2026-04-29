import MongoDao from "./mongoDao.js";
import { CourseModel } from "./models/course.js";

class CourseDao extends MongoDao {
  constructor(model) {
    super(model);
  }

  getCoursesByInstructor = async (instructorId) => {
    try {
      return await this.model.find({ instructor: instructorId });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const courseDao = new CourseDao(CourseModel);
