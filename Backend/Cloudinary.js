import cloudinary from "cloudinary";

export const cloud = cloudinary.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Cloud_Key,
  api_secret: process.env.Cloud_Secret,
});
