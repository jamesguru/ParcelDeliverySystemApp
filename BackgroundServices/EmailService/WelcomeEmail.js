const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendMail");
const User = require("../models/User");
const CryptoJs = require("crypto-js");

dotenv.config();

const sendWelcomeEmail = async (fullname, password, email) => {
  const users = await User.find({ status: 0 });
 

  if (users.length > 0) {
    for (let user of users) {
      const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS);
      const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
      ejs.renderFile(
        "templates/welcome.ejs",
        { fullname: user.fullname,password:originalPassword, email: user.email },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: user.email,
            subject: "Welcome to SendIT",
            html: data,
          };

          try {
            sendMail(messageoption);
            await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });
          } catch (error) {
            console.log(err);
          }
        }
      );
    }
  }
};

module.exports = { sendWelcomeEmail };
