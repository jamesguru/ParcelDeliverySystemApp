const express = require("express");
const cron = require("node-cron");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { SendParcelDeliveredEmail } = require("./EmailService/DeliveredParcel");
const { SendParcelPendingEmail } = require("./EmailService/PendingParcel");
const { sendWelcomeEmail } = require("./EmailService/WelcomeEmail");

dotenv.config();

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("DB connection is successfull");
  })
  .catch((e) => {
    console.log(e);
  });

const run = () => {
  cron.schedule("* * * * * *", async() => {
  
    await SendParcelDeliveredEmail();
    await SendParcelPendingEmail();
    await sendWelcomeEmail();
    
  });
};

run();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Backgroundservice is running on port ${PORT}`);
});