const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendMail");
const Parcel = require("../models/Parcel");
dotenv.config();

const SendParcelPendingEmail = async () => {
  const parcels = await Parcel.find({status: 0 });
  if (parcels.length > 0) {
    for (let parcel of parcels) {
      ejs.renderFile(
        "templates/pendingparcel.ejs",
        {
          sendername: parcel.sendername,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientname,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: parcel.senderemail,
            subject: "You've got a parcel",
            html: data,
          };

          try {
            sendMail(messageoption);
           
          } catch (error) {
            console.log(err);
          }
        }
      );

      ejs.renderFile(
        "templates/pendingparcel.ejs",
        {
          sendername: parcel.sendername,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientname,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: parcel.recipientemail,
            subject: "You've got a parcel",
            html: data,
          };

          try {
            sendMail(messageoption);
            await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 1 } });
          } catch (error) {
            console.log(err);
          }
        }
      );
    }
  }
};

module.exports = { SendParcelPendingEmail };
