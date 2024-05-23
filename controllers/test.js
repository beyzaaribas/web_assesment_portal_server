const Test = require("../modules/Test.js")
const TestCategories = require("../modules/TestCategories")


const createTest = async(req,res,next)=>{
    const {categoryId} = req.body
    try{
    const category = await TestCategories.findById(categoryId)
    const tests = await Test.create({...req.body, categoryName:category.categoryName})
    console.log(tests)
    return res.status(200).json({isSuccess:true, message:"Test created successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const getTestDetail = async(req,res,next)=>{
    const {id} = req.params
    try{
    const tests = await Test.findById(id)
    return res.status(200).json({isSuccess:true, tests})
    }catch(error){
        console.log(error)
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}


const updateTest = async(req,res,next)=>{
    const {id} = req.params
    try{
    const tests = await Test.findByIdAndUpdate(id, {$set:req.body}, {new:true})
    return res.status(200).json({isSuccess:true, message:"Test updated successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const deleteTest = async(req,res,next)=>{
    const {id} = req.params
    try{
    const tests = await Test.findByIdAndDelete(id)
    return res.status(200).json({isSuccess:true, message:"Test deleted successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const getAllTests = async(req,res,next) => {
    try{
     const tests = await Test.find()
     return res.status(200).json({isSuccess:true, tests})
    }catch{
     return res.status(500).json({isSuccess:false})
    }
}




module.exports = {createTest, updateTest, deleteTest, getAllTests, getTestDetail}