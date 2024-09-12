import jwt from "jsonwebtoken";

export const GenerateToken = async (Id) => {
  try {
    const Token = jwt.sign({ _id: Id }, process.env.Secret);
    return Token;
  } catch (error) {
    throw error;
  }
};
