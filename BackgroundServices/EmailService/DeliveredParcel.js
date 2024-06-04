const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendMail");
const Parcel = require("../models/Parcel");
dotenv.config();

const SendParcelDeliveredEmail = async () => {
  const parcels = await Parcel.find({ status: 2 });

  if (parcels.length > 0) {
    for (let parcel of parcels) {
      ejs.renderFile(
        "templates/deliveredparcel.ejs",
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
            subject: "Your parcel has been delivered",
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
        "templates/deliveredparcel.ejs",
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
            subject: "Your parcel has been delivered",
            html: data,
          };

          try {
            sendMail(messageoption);
            await Parcel.findByIdAndUpdate(parcel._id, { $set: { status: 3} });
          } catch (error) {
            console.log(err);
          }
        }
      );
    }
  }
};

module.exports = {SendParcelDeliveredEmail };
