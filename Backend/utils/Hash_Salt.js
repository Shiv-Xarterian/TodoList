import bcrypt from "bcrypt";
import { Conflict } from "./ErrorHandling.js";

export const GenerateHash = async (UserPassword) => {
  try {
    const HashPassword = await bcrypt.hashSync(
      UserPassword,
      bcrypt.genSaltSync(parseInt(process.env.Rounds))
    );
    return HashPassword;
  } catch (error) {
    throw error;
  }
};
export const VerifyPassword = async (UserPassword, HashPassword) => {
  try {
    const Verify = await bcrypt.compareSync(UserPassword, HashPassword);
    if (!Verify) throw new Conflict(`Wrong Password`);
    return;
  } catch (error) {
    throw error;
  }
};
