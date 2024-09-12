import jwt from "jsonwebtoken";

export const CheckAuthentication = async (req, res, next) => {
  try {
    const Token = req.headers["token"];

    if (!Token) {
      return res.status(404).json({
        Success: false,
        Message: "Please provide Jwt Token",
      });
    }

    const DecodedData = jwt.verify(Token, process.env.Secret);

    if (!DecodedData) {
      return res.status(401).json({
        Success: false,
        Message: "Invalid Token! Please Login",
      });
    }

    req.id = DecodedData._id;
    next();
  } catch (error) {
    return res.status(500).json({
      Success: false,
      Message: error.message,
    });
  }
};
