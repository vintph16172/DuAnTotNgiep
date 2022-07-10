import mongoose from "mongoose";
const { ObjectId } = mongoose

const answerListenWriteSchema = new mongoose.Schema({
    speak:{
        type: ObjectId,
        ref: "Speak"
    },
    content:{
        type: String,
        required: true
    }
},{timestamps:true})

export default mongoose.model("AnswerListenWrite",answerListenWriteSchema)