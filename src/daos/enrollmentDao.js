import MongoDao from "./mongoDao,js";
import { EnrollmentModel } from "./models/enrollment.js";

class EnrollmentDao extends MongoDao {
  constructor(model) {
    super(model);
  }

  getEnrollmentByStudents = async (studentId) => {
    try {
        return await this.model.find({student: studentId}).populate("course")
    } catch (error) {
        throw new Error(error);
    }
  }

  getEnrollmentByCourse = async (courseId)=> {
    try {
        return await this.model.find({course: courseId}).populate("student")
    } catch (error) {
        throw new Error(error);
        
    }
  }
}
