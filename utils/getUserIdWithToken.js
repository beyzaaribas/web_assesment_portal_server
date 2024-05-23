
const jwt = require("jsonwebtoken");

const getUserIdWithToken = (token) => {
    const decodedToken = jwt.verify(token, "SECRET_KEY");
    return decodedToken.id
}

const getUserTypeWithToken = (token)=>{
    const decodedToken = jwt.verify(token, "SECRET_KEY");
    return decodedToken.userType
}

module.exports={getUserIdWithToken, getUserTypeWithToken}