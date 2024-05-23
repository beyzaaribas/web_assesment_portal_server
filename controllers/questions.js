
const Questions = require("../modules/Questions")

const createQuestion = async(req,res,next)=>{
    try{
    const question = await Questions.create(req.body)
    return res.status(200).json({isSuccess:true, message:"Question created successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}


const getQuestionDetail = async(req,res,next)=>{
    const {id} = req.params
    try{
    const question = await Questions.findById(id)
    return res.status(200).json({isSuccess:true, question})
    }catch(error){
        console.log(error)
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const updateQuestion = async(req,res,next)=>{
    const {id} = req.params
    try{
    const question = await Questions.findByIdAndUpdate(id, {$set:req.body}, {new:true})
    return res.status(200).json({isSuccess:true, message:"Question updated successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const deleteQuestion = async(req,res,next)=>{
    const {id} = req.params
    try{
    const question = await Questions.findByIdAndDelete(id)
    return res.status(200).json({isSuccess:true, message:"Question deleted successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const getAllQuestions = async(req,res,next) => {
   const {id} = req.params
    try{
     const questions = await Questions.find({testId:id})
     console.log(questions)
     return res.status(200).json({isSuccess:true, questions})
    }catch{
     return res.status(500).json({isSuccess:false})
    }
}



module.exports = {createQuestion, updateQuestion, deleteQuestion, getAllQuestions, getQuestionDetail}