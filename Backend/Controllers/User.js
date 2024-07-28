// import { User } from "../Models/User";

const Register = async (req, res) => {
  try {
    const { UserName, UserEmail, UserPassword } = req.body;
    const user = await User.findOne({ Email: UserEmail });

    if (user) {
      return res.status(409).json({
        success: "false",
        Message: "User Already Exists",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { Register };
