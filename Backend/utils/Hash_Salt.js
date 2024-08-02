const bcrypt = require("bcrypt");
const { Conflict } = require("./ErrorHandling");

const GenerateHash = async (UserPassword) => {
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
const VerifyPassword = async (UserPassword, HashPassword) => {
  try {
    const Verify = await bcrypt.compareSync(UserPassword, HashPassword);
    if (!Verify) throw new Conflict(`Wrong Password`);
    return;
  } catch (error) {
    throw error;
  }
};
module.exports = { GenerateHash, VerifyPassword };
