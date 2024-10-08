const { cloudinary } = require("../Cloudinary");
const fs = require("fs");
import { NotFoundError } from "./ErrorHandling.js";

const UploadFile = async (req, res, next) => {
  try {
    if (!req.file) return new NotFoundError("Please Provide File");
    const uploadResult = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path);
    req.FileData = uploadResult;
    next();
  } catch (error) {
    return res.status(500).json({
      Success: false,
      Error: error.message,
    });
  }
};

module.exports = { UploadFile };
