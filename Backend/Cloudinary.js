const { v2: cloudinary } = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Cloud_Key,
  api_secret: process.env.Cloud_Secret,
});
module.exports = { cloudinary };
