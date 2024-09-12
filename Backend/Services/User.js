import { CreateUser, FindUser } from "../DataBase/User.js";
import { Conflict, NotFoundError } from "../utils/ErrorHandling.js";
import { VerifyPassword } from "../utils/Hash_Salt.js";
import { GenerateToken } from "../utils/JsonWebToken.js";

export const RegisterUser = async (
  UserName,
  UserEmail,
  UserPassword,
  UserRole
) => {
  try {
    let user = await FindUser({ Email: UserEmail });
    if (user) throw new Conflict(`User Already Exists`);
    const HashPassword = await GenerateHash(UserPassword);
    user = await CreateUser(UserName, UserEmail, HashPassword, UserRole);
    const Token = await GenerateToken(user._id);
    return {
      Status: true,
      Message: "User Registered Successfully",
      User: user,
      Token: Token,
    };
  } catch (error) {
    throw error;
  }
};

export const LoginUser = async (UserEmail, UserPassword) => {
  try {
    let user = await FindUser({ Email: UserEmail });
    if (!user) throw new NotFoundError(`No User Found! Please Register`);
    await VerifyPassword(UserPassword, user.Password);
    const Token = await GenerateToken(user._id);
    return {
      Status: true,
      Message: "User Logged In Successfully",
      User: user,
      Token: Token,
    };
  } catch (error) {
    throw error;
  }
};

export const UpdateAvatar = async (FileData, UserId) => {
  try {
    const user = await FindUser({ UserId: UserId });
    if (!user) throw new NotFoundError(`No User Found! Please Register`);
    user.Avatar = FileData.secure_url;
    await user.save();
    return {
      Status: true,
      Message: "Avatar Updated Successfully",
    };
  } catch (error) {
    throw error;
  }
};

export const LoadUserService = async (UserId) => {
  try {
    const user = await FindUser({ UserId });
    if (!user) throw new NotFoundError(`No User Found! Please Register`);
    return {
      Status: true,
      Message: "Welcome Back",
      User: user,
    };
  } catch (error) {
    throw error;
  }
};
