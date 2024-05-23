const UserResult = require("../modules/UserResult");
const FinishedTests = require("../modules/FinishedTests")
const Test = require("../modules/Test.js")

const { getUserIdWithToken } = require("../utils/getUserIdWithToken");



const getUserStatistics = async (req,res,next ) => {
    const userId = getUserIdWithToken(req.cookies.token)
   try{
    const userPendingResults = await UserResult.find({userId: userId, statu:false})
    const userCompletedResults = await UserResult.find({userId: userId, statu:true})
    const userFinishedTests = await FinishedTests.find({userId: userId})

    const statisticsData = {
     pendingList:userPendingResults,
     completedList:userCompletedResults,
     finishedTestList: userFinishedTests
    }

    return res.status(200).json({isSuccess:true, statisticsData})
   }catch(error){
    return res.status(400).json({isSuccess:false, message:error})
   } 
}


const getAdminStatistics = async (req,res,next ) => {
   try{
    const pendingResults = await UserResult.find({statu:false})
    const completedResults = await UserResult.find({statu:true})
    const userFinishedTests = await FinishedTests.find()
    const userTotalTests = await Test.find()


    const statisticsData = {
     pendingList:pendingResults,
     completedList:completedResults,
     finishedTestList: userFinishedTests,
     totalTests:userTotalTests
    }

    return res.status(200).json({isSuccess:true, statisticsData})
   }catch(error){
    return res.status(400).json({isSuccess:false, message:error})
   } 
}

module.exports = {getUserStatistics, getAdminStatistics}