import mongoose from "mongoose";

export const connectdatabase = async () => {
  mongoose
    .connect(process.env.Mongo)
    .then((res) => {
      console.log(`DataBase Connected`);
    })
    .catch((err) => {
      console.log(`Error in Connection with DataBase -> ${err.message}`);
    });
};
