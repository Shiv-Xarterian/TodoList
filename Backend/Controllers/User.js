const { User } = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { NotFoundError } = require("../Middleware/ErrorHandling");

const Register = async (req, res) => {
  try {
    const { UserName, UserEmail, UserPassword, UserRole } = req.body;

    if (!UserEmail || !UserPassword || !UserName) {
      return res.status(409).json({
        Success: false,
        Error: "Please Check! Credentials are Missing",
      });
    }

    let user = await User.findOne({ Email: UserEmail });

    if (user) {
      return res.status(409).json({
        Success: "false",
        Error: "User Already Exists",
      });
    }

    const HashPassword = bcrypt.hashSync(
      UserPassword,
      bcrypt.genSaltSync(parseInt(process.env.Rounds))
    );

    user = await User.create({
      Name: UserName,
      Email: UserEmail,
      Password: HashPassword,
      Role: UserRole,
    });

    const Token = jwt.sign({ _id: user.id }, process.env.Secret);

    return res.status(201).json({
      Success: true,
      Message: "User Registered Successfully",
      User: user,
      Token: Token,
    });
  } catch (error) {
    return res.status(500).json({
      Success: false,
      Error: error.message,
    });
  }
};

const Login = async (req, res) => {
  try {
    const { UserEmail, UserPassword } = req.body;

    if (!UserEmail || !UserPassword) {
      return res.status(400).json({
        Success: false,
        Error: `Please Recheck! Credentials are missing`,
      });
    }

    const user = await User.findOne({ Email: UserEmail });

    if (!user) {
      return res.status(404).json({
        Success: false,
        Error: "No User Found! Please Register",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(UserPassword, user.Password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        Success: false,
        Error: "Wrong Password",
      });
    }

    const JwtToken = jwt.sign({ _id: user._id }, process.env.Secret);

    return res.status(201).json({
      Success: true,
      Message: "User Logged In Successful",
      User: user,
      Token: JwtToken,
    });
  } catch (error) {
    return res.status(500).json({
      Success: false,
      Error: error.message,
    });
  }
};

const updateAvatar = async (req, res) => {
  try {
    const FileData = req.FileData;
    const UserId = req.id;

    const user = await User.findById(UserId);

    if (!user) {
      throw new NotFoundError("No User Found");
    }

    user.Avatar = FileData.secure_url;
    await user.save();

    return res.status(200).json({
      Success: true,
      Message: "User Avatar Updated Successfully",
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      Success: false,
      Message: error.message,
    });
  }
};

module.exports = { Register, Login, updateAvatar };
