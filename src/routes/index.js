import { Router } from "express";
const router = Router()

import authRoutes from "./authRoutes.js"
import gradeRoutes from "./gradeRoutes.js"
import usersRoutes from "./usersRoutes.js"
import coursesRoutes from "./coursesRoutes.js"

router.use("/auth", authRoutes)
router.use("/grades", gradeRoutes)
router.use("/users", usersRoutes)
router.use("/courses", coursesRoutes)


export default router