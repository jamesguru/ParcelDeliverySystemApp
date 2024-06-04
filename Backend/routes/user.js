const express = require("express");
const router = express.Router();
const User = require("../models/User");

// DELETE 

router.delete("/:id", async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
  
      res.status(200).json("The user has been deleted");
    } catch (error) {
      res.status(500).json("You are not authorized for this operation");
    }
  });

  //GET ALL USERS

  router.get("/", async (req, res) => {
    try {
      const users = await User.find().sort({ createdAt: -1 });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
