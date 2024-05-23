const Companies = require("../modules/Companies");

const AddCompany = async (req, res, next) => {
  try {
    const company = await Companies.create(req.body);
    return res
      .status(200)
      .json({ isSuccess: true, message: "Company created successfully." });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      isSuccess: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

const updateCompany = async (req, res, next) => {
  const { id } = req.params;
  try {
    const company = await Companies.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    return res
      .status(200)
      .json({ isSuccess: true, message: "Company updated successfully." });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      isSuccess: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

const deleteCompany = async (req, res, next) => {
  const { id } = req.params;
  try {
    const company = await Companies.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ isSuccess: true, message: "Company deleted successfully." });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      isSuccess: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

const getAllCompanies = async(req,res,next) => {
    try{
     const companies = await Companies.find()
     return res.status(200).json({isSuccess:true, companies})
    }catch{
     return res.status(500).json({isSuccess:false})
    }
}

module.exports = { AddCompany, updateCompany, deleteCompany, getAllCompanies };
