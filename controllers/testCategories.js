const TestCategories = require("../modules/TestCategories")


const createCategory = async(req,res,next)=>{
    try{
    const category = await TestCategories.create(req.body)
    return res.status(200).json({isSuccess:true, message:"Category created successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}


const updateCategory = async(req,res,next)=>{
    const {id} = req.params
    try{
    const category = await TestCategories.findByIdAndUpdate(id, {$set:req.body}, {new:true})
    return res.status(200).json({isSuccess:true, message:"Category updated successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const getCategoryDetail = async(req,res,next)=>{
    const {id} = req.params
    try{
    const category = await TestCategories.findById(id)
    return res.status(200).json({isSuccess:true, category})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const deleteCategory = async(req,res,next)=>{
    const {id} = req.params
    try{
    const category = await TestCategories.findByIdAndDelete(id)
    return res.status(200).json({isSuccess:true, message:"Category updated successfully."})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const getAllCategories = async(req,res,next) => {
    try{
     const categories = await TestCategories.find()
     return res.status(200).json({isSuccess:true, categories})
    }catch{
     return res.status(500).json({isSuccess:false})
    }
}




module.exports = {createCategory, updateCategory, deleteCategory, getAllCategories, getCategoryDetail}