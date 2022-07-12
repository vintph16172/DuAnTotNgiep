import express from "express";
import { addQuiz, deleteQuiz, detailQuiz, editQuiz, listQuiz } from "../controllers/quiz";


const router = express.Router()

router.get("/quiz", listQuiz )
router.get("/quiz/:id", detailQuiz )
router.post("/quiz", addQuiz )
router.put("/quiz/:id", editQuiz )
router.delete("/quiz/:id", deleteQuiz )

export default router