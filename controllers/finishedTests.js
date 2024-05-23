
const FinishedTests = require("../modules/FinishedTests")
const { getUserIdWithToken } = require("../utils/getUserIdWithToken")

const finishTest = async(req,res,next)=>{
    const userId = getUserIdWithToken(req.cookies.token)
    try{
    const test = await FinishedTests.create({...req.body, userId: userId})
    }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})
    }
}

const getUserFinishedTests = async(req,res,next) => {
 const userId = getUserIdWithToken(req.cookies.token)
 try{
    const tests = await FinishedTests.find({userId: userId})
    return res.status(200).json({isSuccess:true, tests})

 }catch(error){
    return res.status(500).json({isSuccess:false, message:"An error occurred. Please try again later."})

 }
}


module.exports = {finishTest, getUserFinishedTests}