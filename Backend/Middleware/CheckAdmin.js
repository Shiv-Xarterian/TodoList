const { User } = require("../Models/User");

const CheckValidAdmin = async (req, res, next) => {
  try {
    const UserId = req.id;
    const user = await User.findById(UserId);
    console.log(user);
    if (!user || !user.Role) throw new Error("Not A Admin");
    next();
  } catch (error) {
    return res.status(400).json({
      Success: false,
      Error: error.message,
    });
  }
};

module.exports = { CheckValidAdmin };
