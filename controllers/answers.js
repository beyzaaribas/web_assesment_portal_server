const Answers = require("../modules/Answers")


const createAnswer = async(req,res,next)=>{
    try{
    const answer = await Answers.create(req.body)
    return res.status(200).json({isSuccess:true, message:"Answer created successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}


const getAnswerDetail = async(req,res,next)=>{
    const {id} = req.params
    try{
    const answer = await Answers.findById(id)
    return res.status(200).json({isSuccess:true, answer})
    }catch(error){
        console.log(error)
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const updateAnswer = async(req,res,next)=>{
    const {id} = req.params
    try{
    const answer = await Answers.findByIdAndUpdate(id, {$set:req.body}, {new:true})
    return res.status(200).json({isSuccess:true, message:"Answer updated successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const deleteAnswer = async(req,res,next)=>{
    const {id} = req.params
    try{
    const answer = await Answers.findByIdAndDelete(id)
    return res.status(200).json({isSuccess:true, message:"Answer updated successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const getAllAnswers = async(req,res,next) => {
    const {id} = req.params
    try{
     const answers = await Answers.find({questionId:id})
     return res.status(200).json({isSuccess:true, answers})
    }catch{
     return res.status(500).json({isSuccess:false})
    }
}

const getTestAnswers = async(req,res,next) => {
    const {id} = req.params
    try{
     const answers = await Answers.find({testId:id})
     return res.status(200).json({isSuccess:true, answers})
    }catch{
     return res.status(500).json({isSuccess:false})
    }
}




module.exports = {createAnswer, updateAnswer, deleteAnswer, getAllAnswers, getAnswerDetail, getTestAnswers}