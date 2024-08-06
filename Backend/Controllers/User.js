const { User } = require("../Models/User");
const { NotFoundError } = require("../utils/ErrorHandling");
const {
  RegisterUser,
  LoginUser,
  UpdateAvatar,
  LoadUserService,
} = require("../Services/User");

const Register = async (req, res) => {
  try {
    const { UserName, UserEmail, UserPassword, UserRole } = req.body;
    if (!UserEmail || !UserPassword || !UserName)
      throw new NotFoundError("Please See Credentials are Missing");
    const response = await RegisterUser(
      UserName,
      UserEmail,
      UserPassword,
      UserRole
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(error.status || 500).json({
      Success: false,
      Error: error.message,
    });
  }
};

const Login = async (req, res) => {
  try {
    const { UserEmail, UserPassword } = req.body;

    if (!UserEmail || !UserPassword)
      throw new NotFoundError(`Please Verify Credentials`);

    const LoginResponse = await LoginUser(UserEmail, UserPassword);
    return res.status(200).json(LoginResponse);
  } catch (error) {
    return res.status(error.status || 500).json({
      Success: false,
      Error: error.message,
    });
  }
};

const updateAvatar = async (req, res) => {
  try {
    const FileData = req.FileData;
    const UserId = req.id;

    if (!FileData || !UserId)
      throw new NotFoundError(`Credentials are Missing`);
    const UpdateAvatarResponse = await UpdateAvatar(FileData, UserId);
    return res.status(200).json(UpdateAvatarResponse);
  } catch (error) {
    return res.status(error.status || 500).json({
      Success: false,
      Message: error.message,
    });
  }
};

const LoadUser = async (req, res) => {
  const LoadUserResponse = await LoadUserService(req.id);
  return res.status(200).json(LoadUserResponse);
};

module.exports = { Register, Login, updateAvatar, LoadUser };
