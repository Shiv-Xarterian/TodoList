import { logger } from "../logger.js";
import {
  RegisterUser,
  LoginUser,
  UpdateAvatar,
  LoadUserService,
} from "../Services/User.js";
import { NotFoundError } from "../utils/ErrorHandling.js";

export const Register = async (req, res) => {
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
    return res.status(200).jsonp(response);
  } catch (error) {
    return res.status(error.status || 500).json({
      Success: false,
      Error: error.message,
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { UserEmail, UserPassword } = req.body;

    if (!UserEmail || !UserPassword)
      throw new NotFoundError(`Please Verify Credentials`);

    const LoginResponse = await LoginUser(UserEmail, UserPassword);

    logger.info("Login DOne");
    console.log("LOGIN DONE");
    return res.status(200).json(LoginResponse);
  } catch (error) {
    logger.error(error);
    return res.status(error.status || 500).json({
      Success: false,
      Error: error.message,
    });
  }
};

export const updateAvatar = async (req, res) => {
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

export const LoadUser = async (req, res) => {
  const LoadUserResponse = await LoadUserService(req.id);
  return res.status(200).json(LoadUserResponse);
};
