import MongoDao from "./mongoDao.js";
import { GradeModel } from "./models/grade.js"

class GradeDao extends MongoDao {
    contructor(model){
        super(model)
    }

    getGradesByEnrollment = async (enrollmentId)=>{
        try {
            return await this.model.findOne({enrollment: enrollmentId})
        } catch (error) {
            throw new Error(error);
        }
    }

    getGradesByInstructor = async (enrollmentIds)=> {
        try {
            return await this.model.find({ enrollment: { $in: enrollmentIds }}).populate("enrollment")
        } catch (error) {
            throw new Error(error);
            
        }
    }
}

export const gradeDao = new GradeDao(GradeModel)