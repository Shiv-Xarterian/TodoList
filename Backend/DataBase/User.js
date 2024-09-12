import { User } from "../Models/User.js";

export const FindUser = async ({ UserId, Email, Populate }) => {
  try {
    const user = UserId
      ? await User.findById(UserId).populate(`${Populate || ""}`)
      : await User.findOne({ Email }).populate(`${Populate || ""}`);
    return user;
  } catch (error) {
    throw error;
  }
};

export const CreateUser = async (Name, Email, Password, Role) => {
  try {
    const user = await User.create({
      Name,
      Email,
      Password,
      Role,
    });
    return user;
  } catch (error) {
    throw error;
  }
};
